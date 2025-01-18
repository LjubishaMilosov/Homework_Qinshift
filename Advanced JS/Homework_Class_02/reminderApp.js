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
        let addReminderBtn = document.getElementById("submitBtn");
        let showRemindersBtn = document.getElementById('showRemindersButton');
        
        let reminders = [];
        
        addReminderBtn.addEventListener('click', function() {
            let titleInput = document.getElementById('titleInput');
            let descriptionInput = document.getElementById('descriptionInput');
            let priorityInput = document.getElementById('prioritySelect');
            let colorInput = document.getElementById('color');
            
            let title = titleInput.value;
            let description = descriptionInput.value;
            let priority = priorityInput.value;
            let color = colorInput.value;
            
            if (title && priority && description) { // 'black' is a default color, 'low' is default priority, no need for validation
                const reminder = {
                    title: title,
                    description: description,
                    priority: priority,
                    color: color
                };
                reminders.push(reminder);
                addReminderToTable(reminder);
                titleInput.value = ''; // Reset the title input field
                descriptionInput.value = ''; // Reset the description input field
                priorityInput.value = 'Low'; // Reset to default priority
                colorInput.value = '#000000'; // Reset to default color
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