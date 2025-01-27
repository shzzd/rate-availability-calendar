# Project Documentation

## Overview

This project is part of the Grit System Technical Assessment for Front-End Engineers. The main objective is to enhance the calendar component by implementing infinite scrolling using a cursor query parameter in the `useRoomRateAvailabilityCalendar` query. Additionally, the candidate will optimize the horizontal scroll behavior of the calendar to ensure smooth and responsive navigation.

### Existing Code and Behavior

The existing codebase includes a calendar component that displays room rate availability data for a specified date range. The data is fetched using the `useRoomRateAvailabilityCalendar` hook, which retrieves the data from an API endpoint. The calendar component supports horizontal scrolling to navigate through the dates.

### Goal for the Candidate

The candidate is required to:

1. Implement infinite scrolling for the calendar component by converting the `useRoomRateAvailabilityCalendar` query to use infinite queries with a cursor query parameter.
2. Optimize the horizontal scroll behavior of the calendar to ensure smooth and responsive scrolling.
3. Update the project documentation to reflect the changes made.

## Rate Calendar API Documentation

### Base URL

`https://beta.api.bytebeds.com`

### Endpoint

`GET /api/v1/property/{property_id}/rate-calendar/assessment`

### Query Parameters

- `property_id` (number): The ID of the property.
- `start_date` (string): The start date for the calendar data in YYYY-MM-DD format.
- `end_date` (string): The end date for the calendar data in YYYY-MM-DD format.
- `cursor` (number, optional): The cursor for pagination, used for infinite scrolling.

### Response

The response contains the following structure:

```json
{
  "room_categories": [
    {
      "id": "string",
      "name": "string",
      "occupancy": "number",
      "inventory_calendar": [
        {
          "id": "string",
          "date": "string",
          "available": "number",
          "status": "boolean",
          "booked": "number"
        }
      ],
      "rate_plans": [
        {
          "id": "number",
          "name": "string",
          "calendar": [
            {
              "id": "string",
              "date": "string",
              "rate": "number",
              "min_length_of_stay": "number",
              "reservation_deadline": "number"
            }
          ]
        }
      ]
    }
  ],
  "nextCursor": "number"
}
```

### Postman Collection

You can find a working Postman collection for this API [here](https://www.postman.com/blue-star-32935/workspace/grit-system/request/26020074-3b661363-f648-4233-9020-4a1264b0d9e7?action=share&creator=26020074&ctx=documentation).

## Instructions for the Candidate

1. **Setup the Project:**

   - Clone the repository from the provided URL.
   - Install the necessary dependencies using `npm install`.
   - Set up the environment variable `NEXT_PUBLIC_BACKEND_URL` with the base URL `https://beta.api.bytebeds.com`.
   - Ensure the project runs successfully by executing `npm start`.

2. **Implement Infinite Scrolling:**

   - Locate the `useRoomRateAvailabilityCalendar` query in the codebase.
   - Convert this query to use infinite queries with a `cursor` query parameter.
   - Ensure that the calendar component can load more data as the user scrolls vertically.

3. **Optimize Scroll Behavior:**

   - Analyze the current implementation of the calendar's horizontal scroll behavior.
   - Identify the causes of the laggy scroll performance.
   - Optimize the scroll behavior to ensure it is smooth and responsive.
   - Test the scroll performance on different devices and screen sizes to ensure consistency.

4. **Documentation:**

   - Update the project documentation to reflect the changes made.
   - Include any necessary instructions for future developers on how to maintain or extend the infinite scrolling functionality.

5. **Submission:**
   - Fork the repository and complete the assessment on your fork.
   - Commit your changes to a new branch and push it to your forked repository.
   - Host the project on Vercel/CodeSandbox and share the live link.
   - Share the link to your forked repository and the live link via email at mustakim@grit.com.bd.

**Deadline: 30 January 2025**

## Additional Notes

- Pay attention to code quality and follow best practices for React and JavaScript development.
- Consider edge cases and error handling to ensure a robust implementation.
- Feel free to reach out if you have any questions or need further clarification on the requirements.

Good luck, and we look forward to reviewing your implementation!
