import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { message: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
      const { name, email, message } = await request.json();
      
      const databaseId = process.env.NOTION_DATABASE_ID;
if (!databaseId) {
  throw new Error('NOTION_DATABASE_ID environment variable is not set');
}

      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Name: {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          },
          Email: {
            email: email,
          },
          Message: {
            rich_text: [
              {
                text: {
                  content: message,
                },
              },
            ],
          },
          Status: {
            select: {
              name: "New Lead",
            },
          },
          "Submitted At": {
            date: {
              start: new Date().toISOString(),
            },
          },
        },
      });

      return NextResponse.json(
        { success: true },
        { status: 200 }
      );
    } catch (error) {
      console.error('Error saving lead:', error);
      return NextResponse.json(
        { message: 'Internal server error' },
        { status: 500 }
      );
    }
  }