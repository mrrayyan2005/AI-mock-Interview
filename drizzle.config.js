/** @type { import("drizzle-kit").Config } */
module.exports = {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_4q7bUfduSFoB@ep-summer-field-a5bh6jxw-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
  }
};
