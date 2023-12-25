import { Client, Databases, ID, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
  client = new Client();
  database;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectID);
    this.database = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async getPost(slug) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite service error in getPost()", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Appwrite service error in getPosts()", error);
      return false;
    }
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseID,
        conf.appwriteCollectionID,
        ID.unique(),
        {
          title,
          featuredImage,
          status,
          userId,
          slug,
          content,
        }
      );
    } catch (error) {
      console.log("Appwrite service error in createPost()", error);
      return false;
    }
  }
}

// const client = new Client();
// const database = new Databases();

// client.setEndpoint().setProject();
