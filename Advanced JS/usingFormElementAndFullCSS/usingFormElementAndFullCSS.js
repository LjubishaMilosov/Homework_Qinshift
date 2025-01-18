// Reminder App

// Create a reminder app

// There should be:

    // An input for entering the title
    // An input for entering priority (Low, medium, High)
    // An input for color
    // A textarea for adding a description
    // A button for adding the reminder
    // A button for showing all reminders

        // When the button for adding is clicked an object needs to be created with the properties from the inputs ( title, priority, color, and description )
        // The object should then be added to an array of reminders
        
        // When the button for showing all reminders is clicked it should show a table with title, priority, and description columns
        // The title should be the color of the "color" property


    let reminderForm = document.getElementById('reminderForm');
    let showRemindersBtn = document.getElementById('showRemindersButton');

    let reminders = [];

    reminderForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let title = document.getElementById('titleInput').value;
    let description = document.getElementById('descriptionInput').value;
    let priority = document.getElementById('prioritySelect').value;
    let color = document.getElementById('color').value;
    
    if (title && description) { // black is a defaut color, low is default priority, no need for validation
        const reminder = {
            title: title,
            description: description,
            priority: priority,
            color: color
        };
        reminders.push(reminder);
        addReminderToTable(reminder);
        document.getElementById('titleInput').value = '';
        document.getElementById('descriptionInput').value = '';
        document.getElementById('prioritySelect').value = 'Low';
        document.getElementById('color').value = '#000000';
    }
});

showRemindersBtn.addEventListener('click', function() {
    let reminderTableContainer = document.getElementById('reminderTableContainer');
    reminderTableContainer.style.display = reminderTableContainer.style.display === 'none' ? 'block' : 'none';
});

function addReminderToTable(reminder) {
    let reminderTableBody = document.getElementById('reminderTable').querySelector('tbody');
    let row = document.createElement('tr');
    
    let titleCell = document.createElement('td');
    titleCell.innerText = reminder.title;
    titleCell.style.color = reminder.color;
    
    let priorityCell = document.createElement('td');
    priorityCell.innerText = reminder.priority;
    
    let descriptionCell = document.createElement('td');
    descriptionCell.innerText = reminder.description;
    
    row.appendChild(titleCell);
    row.appendChild(priorityCell);
    row.appendChild(descriptionCell);
    
    reminderTableBody.appendChild(row);
}