
export const months = [
    {id: 0, sortName: 'Jan', fullName: 'January'},
    {id: 1, sortName: 'Feb', fullName: 'February'},
    {id: 2, sortName: 'Mar', fullName: 'March'},
    {id: 3, sortName: 'Apr', fullName: 'April'},
    {id: 4, sortName: 'May', fullName: 'May'},
    {id: 5, sortName: 'Jun', fullName: 'June'},
    {id: 6, sortName: 'Jul', fullName: 'July'},
    {id: 7, sortName: 'Aug', fullName: 'August'},
    {id: 8, sortName: 'Sep', fullName: 'September'},
    {id: 9, sortName: 'Oct', fullName: 'October'},
    {id: 10, sortName: 'Nov', fullName: 'November'},
    {id: 11, sortName: 'Dec', fullName: 'December'}
];

export const elements = [
    {
        elementType: 'input',
        elementLabel: 'Name',
        elementConfig: {
            type: 'text',
            placeholder: 'Name',
            name: 'name',
        },
        validation: {
            required: true,
            maxLength: 15
        }
    },
    {
        elementType: 'select',
        elementLabel: 'Color',
        elementConfig: {
            type: 'select',
            options: [
                {value: 'red', displayValue: 'Red'},
                {value: 'yellow', displayValue: 'Yellow'},
                {value: 'green', displayValue: 'Green'},
                {value: 'blue', displayValue: 'Blue'},
            ],
            name: 'color'
        },
        validation: {
            required: true
        }
    },
    {
        elementType: 'date',
        elementLabel: 'Date',
        elementConfig: {
            type: 'date',
            placeholder: 'Date',
            name: 'date'
        },
        validation: {
            required: true
        }
    },
    {
        elementType: 'input',
        elementLabel: 'Time',
        elementConfig: {
            type: 'number',
            placeholder: 'Time In Days',
            name: 'time',
        },
        validation: {
            required: true
        }
    },
    {
        elementType: 'textarea',
        elementLabel: 'Description',
        elementConfig: {
            type: 'text',
            placeholder: '',
            name: 'description',
        },
        validation: {
            required: false,
            maxLength: 60
        }
    }
]

export const nextMonthAndYear = (month, year)  => {

    if(month === 11) {

        return [0, year + 1];
    }

    return [month + 1, year];
}

export const prevMonthAndYear = (month, year)  => {

    if(month === 0) {

        return [11, year - 1];
    }

    return [month - 1, year];
}

export const numberDaysInMonth = (year, month) => new Date(year, month, 0).getDate();

export const dayFirstInMonth = (year, month) => new Date(year, month, 1).getDay() - 2;

export const orderTaskInDays = tasks => {

    const items = [];
    let count = null;
    let newTask = null;

    for(let i = 0;i < tasks.length; i++) {

        newTask = null;

        newTask = {
            ...tasks[i]
        }

        count = newTask.day+newTask.time;

        for(let j = newTask.day; j < count; j++) {

            if(items[j] === undefined) {

                items[j] = {
                    type: 'progress',
                    tasks: []
                }
            }

            if(items[j] !== undefined && j === newTask.day) {

                items[j].type = 'start';
            }

            if(j === newTask.day) {

                newTask.type = 'start';
            } else {
                newTask.type = 'progress';
            }

            items[j].tasks.push(newTask);
        }
    }

    console.log(items);

    return items;
};

export const ucfirst = str => str.charAt(0).toUpperCase() + str.slice(1);

export const handleValidation = (validation, value) => {

    let isValid = true;

    Object.keys(validation).forEach(key => {

        switch (key) {
            case ('required'):
                isValid = isValid && value !== '';
                break;
            case ('maxLength'):
                isValid = isValid && value.length <= validation[key];
                break;
        }
    });

    return isValid;
}