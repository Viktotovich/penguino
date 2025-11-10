import { NextRequest, NextResponse } from "next/server";

//AUTH
import getUserSession from "./lib/auth/get_user_session";

/*DOCUMENTATION STATEMENT:

Note: While only one proxy.ts file is supported per project, you can still organize your proxy logic into modules. Break out proxy functionalities into separate .ts or .js files and import them into your main proxy.ts file. This allows for cleaner management of route-specific proxy, aggregated in the proxy.ts for centralized control. By enforcing a single proxy file, it simplifies configuration, prevents potential conflicts, and optimizes performance by avoiding multiple proxy layers.*/

export async function proxy(request: NextRequest) {
  const userSession = await getUserSession();

  if (!userSession?.user) {
    return NextResponse.redirect(new URL("/register", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/community/:path*",
};
