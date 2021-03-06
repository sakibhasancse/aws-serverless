import { v4 as uuid } from 'uuid';
import createError from 'http-errors'
import commonMiddlware from '../lib/commonMiddlware'
async function createAuction(event, context) {
  const { title, description } = event.body;

  const date = new Date().toISOString();
  const auction = {
    id: uuid(),
    title, description, date
  }
  return {
    statusCode: 201,
    body: JSON.stringify(auction)
  };
}

export const handler = commonMiddlware(createAuction)


