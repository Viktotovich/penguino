"use server";
import prisma from "~/lib/prisma/prisma";
import { headers } from "next/headers";

//Types
import type { post } from "~/generated/prisma/client";

// Temporary Mock Data
const mockPosts: post[] = [
  {
    id: "1",
    hidden: false,
    title: "Test Post to see if everything is a-okay",
    body: "A very interesting yet very long paragraph about how awesome Penguino is. It really doesn't end, there should be some kind of a char limit. If you are seeing this without expanding, this is too much content shown. Also, How on earth do we handle new lines? Do we use an arbitrary code like <addnewlinehere> for a <br /> - Actually, will the br by itself work? HTML should be sanitized like in EJS and Edge lol. It will be 100%. I know React does that out of the box",
    authorId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    hidden: false,
    title: "Test Post to see if everything is a-okay",
    body: "A very interesting yet very long paragraph about how awesome Penguino is. It really doesn't end, there should be some kind of a char limit. If you are seeing this without expanding, this is too much content shown. Also, How on earth do we handle new lines? Do we use an arbitrary code like <addnewlinehere> for a <br /> - Actually, will the br by itself work? HTML should be sanitized like in EJS and Edge lol. It will be 100%. I know React does that out of the box",
    authorId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    hidden: false,
    title: "Test Post to see if everything is a-okay",
    body: "A very interesting yet very long paragraph about how awesome Penguino is. It really doesn't end, there should be some kind of a char limit. If you are seeing this without expanding, this is too much content shown. Also, How on earth do we handle new lines? Do we use an arbitrary code like <addnewlinehere> for a <br /> - Actually, will the br by itself work? HTML should be sanitized like in EJS and Edge lol. It will be 100%. I know React does that out of the box",
    authorId: "3",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    hidden: false,
    title: "Test Post to see if everything is a-okay",
    body: "A very interesting yet very long paragraph about how awesome Penguino is. It really doesn't end, there should be some kind of a char limit. If you are seeing this without expanding, this is too much content shown. Also, How on earth do we handle new lines? Do we use an arbitrary code like <addnewlinehere> for a <br /> - Actually, will the br by itself work? HTML should be sanitized like in EJS and Edge lol. It will be 100%. I know React does that out of the box",
    authorId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    hidden: false,
    title: "Test Post to see if everything is a-okay",
    body: "A very interesting yet very long paragraph about how awesome Penguino is. It really doesn't end, there should be some kind of a char limit. If you are seeing this without expanding, this is too much content shown. Also, How on earth do we handle new lines? Do we use an arbitrary code like <addnewlinehere> for a <br /> - Actually, will the br by itself work? HTML should be sanitized like in EJS and Edge lol. It will be 100%. I know React does that out of the box",
    authorId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export async function fetchLatestPosts(currPage: number): Promise<post[]> {
  //https://www.prisma.io/docs/orm/prisma-client/queries/pagination
  const startIndex = currPage * 5; //the "skip"
  const postSelectCount = 5; //the "take"

  return new Promise((resolve) => {
    //artificial delay for now, so we can play with Suspense
    setTimeout(() => {
      resolve(mockPosts);
    }, 3000);
  });
}

export async function fetchPagesCount(): Promise<number> {
  const totalCount = await prisma.post.count({
    where: {
      //visible posts only
      hidden: false,
    },
  });

  /*
   * 5 = Posts per page, hardcoded limit for now
   * .ceil gets the ceiling. 21/5 = 4.2 >> Does
   * it means that there are 4.2 pages? no, there are 5. That extra post will be on
   * page 6. Any decimal implies that there is another page */
  return Math.ceil(totalCount / 5);
}
