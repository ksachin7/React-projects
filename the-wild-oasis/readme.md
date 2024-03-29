# The wild oasis

Status: (incomplete) in progress...  
Deployment: [https://the-wild-oasis.netlify.app](https://the-wild-oasis-1ef4a.netlify.app/)  

### Step 1: Setting Up Authentication
- Implement user authentication using Firebase Authentication or a similar service.
- Allow new users to sign up within the application.
- Create login and signup pages/components.

### Step 2: User Profile Management
- Allow users to upload an avatar.
- Implement functionality for users to change their name and password.
- Create a profile settings page/component.

### Step 3: Cabin Management
- Design a table view to display all cabins.
- Include fields for cabin photo, name, capacity, price, and current discount.
- Implement functionality to update, delete, and create new cabins.
- Add the ability to upload a photo for each cabin.
- Create a page/component for cabin management.

### Step 4: Booking Management
- Design a table view to display all bookings.
- Include fields for arrival and departure dates, status, paid amount, cabin, and guest data.
- Implement filtering by booking status.
- Allow users to delete, check in, or check out a booking.
- Implement functionality to accept payment and confirm payment receipt on check-in.
- Add the option for guests to add breakfast during check-in.
- Create a page/component for booking management.

### Step 5: Guest Management
- Implement functionality to manage guest data.
- Include fields for full name, email, national ID, nationality, and country flag.
- Create a page/component for guest management.

### Step 6: Dashboard
- Design the initial dashboard screen.
- Display important information for the last 7, 30, or 90 days.
- Include lists of guests checking in and out on the current day.
- Show statistics on recent bookings, sales, check-ins, and occupancy rate.
- Create charts showing daily hotel sales, extras sales, and stay durations.
- Implement actions for users to perform tasks directly from the dashboard.

### Step 7: Application Settings
- Allow users to define application-wide settings such as breakfast price, min/max nights per booking, and max guests per booking.
- Create a settings page/component.

### Step 8: Dark Mode
- Implement dark mode functionality throughout the app.
- Allow users to toggle between light and dark modes.
- Ensure proper styling and contrast for readability in dark mode.

### Additional Considerations:
- Use React Router for navigation between different pages/components.
- Utilize state management libraries like Redux or React Context API for managing application state.
- Implement form validation for user input fields.
- Ensure responsive design for compatibility with various screen sizes.
- Implement error handling and feedback mechanisms for a smooth user experience.

### Future work
- Restrict access to users and account page for guest user.

By following these steps, you can gradually build a hotel management app using React that meets the specified requirements. Remember to test each feature thoroughly to ensure functionality and usability.