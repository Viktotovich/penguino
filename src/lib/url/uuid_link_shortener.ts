//Classes
import UUIDFolder from "./uuid-fold-er/uuid_fold_er";
import { UUIDStore } from "./uuid-fold-er/uuid_fold_er";
import UUIDError from "./uuid-fold-er/uuid_error";

// DB
import prisma from "../prisma/prisma";

//TODO: the necessary models for the slugs and all. Also, indexing

// Creating the store with necessary controls
class PrismaSlugStore implements UUIDStore {
  store: typeof prisma;
  constructor(db: typeof prisma) {
    this.store = db;
  }

  async ensureBase(base: string): Promise<void> {
    /* Implement like this
    const existing = await this.store.slugs.findFirst({
      where: {
        slug: base,
      },
    });

    if (!existing) {
      await this.store.slugs.create({
        data: {
          slug: base,
          children: [],
        },
      });
    }

    */
  }
  async addChild(base: string, child: string): Promise<void> {
    /* Implement like this
    const record = await this.store.slugs.findFirst({
      where: {
        slug: base,
      },
    });

    if (!record) throw new UUIDError("Parent/Base not found.");

    await this.store.slugs.update({
      where: {
        slug: base,
      },
      data: {
        children: [...record.children, child],
      },
    });
    */
  }
  async hasChild(base: string, child: string): Promise<boolean> {
    return Promise.resolve(true); //temporary
    /* Implement like this
    const record = await this.store.slugs.findFirst({
      where: {
        slug: base,
        children: { has: child },
      },
    });

    return !!record;
    
    */
  }
}

const store = new PrismaSlugStore(prisma);
const SlugShortener = new UUIDFolder(3, 20, store);

export default SlugShortener;
