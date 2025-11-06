#!/usr/bin/env node

import { Command } from "commander";
import fs from "fs";
import path from "path";

//Docs: https://www.npmjs.com/package/commander

/*
Penguino CLI is heavily inspired by Adonis Ace CLI.

It is no where near as capable, cool, or efficient (yet), but it is a great way
to save a lot of time scaffolding pages. 

If controllers were centralized, I would want to make something like 
npm run penguino:controller test |>> app/controllers/testController with a 
controller scaffold. However, we're not in an MVC structure. We could however
do something similar with API routes or maybe middleware.

I defer further work till there is enough repition to warrant further work on it.
However, a middleware command option is something that is possibly going to be added
in the next dozen commits if it comes down to it.

Something like: npm run penguino:api test which writeFileSync a new function with $
{name} normalized(? < maybe too much work)

Works good enough for now, but we might want to separate <name> and <dir>:
Potential issue: npm run penguino scaffold:full test/test is way too overloaded -
It's all in one: a directory, the file name, and worst of all, a component name as 
well*/

const program = new Command();

program.name("penguino").description("Custom CLI for project scaffolding");

program
  .command("scaffold:base <name>")
  .description("Scaffold a minimal Next.js page")
  .action((name) => createPage(name, baseTemplate(name)));

program
  .command("scaffold:full <name>")
  .description(
    "Scaffold a full-featured page with layout, metadata, page, loading, and error"
  )
  .action((name) => createUtilities(name, fullTemplate(name)));

program
  .command("scaffold:cms <name>")
  .description("Scaffold a CMS-connected page importing the Sanity client")
  .action((name) => createPage(name, cmsTemplate(name)));

program
  .command("scaffold:component <name>")
  .description("Scaffold a React component in src/components")
  .action((name) => createComponent(name));

program.parse(process.argv);

// helpers

function createPage(name: string, content: string) {
  const pageDir = path.join(process.cwd(), "src/app", name);
  const pageFile = path.join(pageDir, "page.tsx");

  if (fs.existsSync(pageFile)) {
    console.error(`Page ${name} already exists.`);
    process.exit(1);
  }

  fs.mkdirSync(pageDir, { recursive: true });
  fs.writeFileSync(pageFile, content);
  console.log(`Created page at src/app/${name}/page.tsx`);
}

function createUtilities(name: string, content: string) {
  const pageDir = path.join(process.cwd(), "src/app", name);

  const pageFile = path.join(pageDir, "page.tsx");
  const layoutFile = path.join(pageDir, `layout.tsx`);
  const errorFile = path.join(pageDir, "error.tsx");
  const loadingFile = path.join(pageDir, "loading.tsx");

  if (
    fs.existsSync(layoutFile) ||
    fs.existsSync(errorFile) ||
    fs.existsSync(loadingFile) ||
    fs.existsSync(pageFile)
  ) {
    console.error("Full scaffold already exists in this directory. ", name);
    process.exit(1);
  }

  fs.mkdirSync(pageDir, { recursive: true });

  fs.writeFileSync(pageFile, content);
  fs.writeFileSync(layoutFile, layoutTemplate());
  fs.writeFileSync(errorFile, errorTemplate());
  fs.writeFileSync(loadingFile, loadingTemplate(name));

  console.log(
    `Scaffolded page.tsx, loading.tsx, layout.tsx, and error.tsx files at src/app/${name}`
  );
}

function createComponent(name: string) {
  const compDir = path.join(process.cwd(), "src/core/components");
  const file = path.join(compDir, `${name}.tsx`);
  if (fs.existsSync(file)) {
    console.error(`Component ${name} already exists.`);
    process.exit(1);
  }
  fs.mkdirSync(compDir, { recursive: true });
  fs.writeFileSync(file, componentTemplate(name));
  console.log(`Created component at src/core/components/${name}.tsx`);
}

// templates

function baseTemplate(name: string) {
  const comp = toComponentName(name);
  return `export default function ${comp}Page() {
  return <div>${name} page</div>;
}
`;
}

function fullTemplate(name: string) {
  const comp = toComponentName(name);
  return `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${comp}",
  description: "${comp} page",
};

export default function ${comp}Page() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">${comp}</h1>
      <p>${name} page content.</p>
    </main>
  );
}
`;
}

function cmsTemplate(name: string) {
  const comp = toComponentName(name);
  return `
    import { type SanityDocument } from "next-sanity";
    import { client } from "~/lib/sanity/client";

    export default async function ${comp}Page() {
    const data = await client.fetch(\`*[_type == "page" && slug.current == "${name}"][0]\`);
    return (
        <div>
        <h1>{data?.title || "${comp}"}</h1>
        <div>{data?.content}</div>
        </div>
    );
    }
    `;
}

function componentTemplate(name: string) {
  const comp = toComponentName(name);
  return `
    export default function ${comp}() {
        return <div>${comp} component</div>;
    }
`;
}

function layoutTemplate() {
  return `
    import type { Metadata } from "next";
    import "./globals.css";

    export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={"antialiased"}
        >
            {children}
        </body>
        </html>
    );
    }
    `;
}

function loadingTemplate(name: string) {
  const comp = toComponentName(name);

  return `
        import ${comp}Skeleton from "@/app/ui/skeletons";

        export default function Loading() {
        return <${comp}Skeleton />;
    }
    `;
}

function errorTemplate() {
  return `
    "use client";

    import { useEffect } from "react";

    export default function Error({
    error,
    reset,
    }: {
    error: Error & { digest?: string };
    reset: () => void;
    }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex h-full flex-col items-center justify-center">
        <h2 className="text-center">Something went wrong!</h2>
        <button
            className=""
            onClick={
            // Attempt to recover by trying to re-render the invoices route
            () => reset()
            }
        >
            Try again
        </button>
        </main>
    );
    }
    `;
}

function toComponentName(name: string) {
  return name
    .split(/[-_\/]/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join("");
}
