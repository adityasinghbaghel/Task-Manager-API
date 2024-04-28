class Validator{
    
    static validTaskInfo(tasks) {
        if (tasks.hasOwnProperty("title") && tasks.hasOwnProperty("description") && tasks.hasOwnProperty("completed")) {
            return {
                "status": true,
                "message": "Validated successfully"
            };
        } else {
            return {
                "status": false,
                "message": "Task is invalid"
            };
        }
    }
}