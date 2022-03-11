// 1. Count Employees Number by Factory
function count_emp_num(){
    var ans = [];
    for(var i=0; i<factories.length; i++){
        var tmp = new Object();
        tmp.name = factories[i].name;
        tmp.count = factories[i].employees.length;
        ans.push(tmp);
    }
    return ans;
}

// 2. Count Factories Number by Employee
function count_fac_num(){
    var all_name = [];
    factories.forEach(function(item){
        item.employees.forEach(function(name){
            var tmp = new Object();
            tmp[employee] = name;
            tmp[count] = 1;
            if(!all_name.find(tmp)){
                all_name.push(tmp);
            }else{
                all_name.find(tmp)[count]++;
            }
        })
    })
    return all_name;
}

// 3. Order employees list by alphabetical order
function order(){
    factories.forEach(function(item){
        var all_element = [];
        item.employees.sort();
        all_element.push(item);
    })
    return all_element;
}

// 4. Count total hours worked in 1 day
function total_hour(){
    var total = 0;
    tasks.forEach(function(item){
        total += item.duration;
    })
    return total/60;
}

// 5. Make a function that take as parameters dayTime and return number of employee working
function howManyEmployeeByTime(time){
    var type;
    employeeType.forEach(function(item){
        if(item.name == time){
            type = item.id;
        }
    })
    var total = 0;
    employees.forEach(function(item){
        if(item.type == type){
            total += 1;
        }
    })
    return total;
}

// 6. How many days of work needed to done all tasks
function day_work(){
    var total = total_hour();
    return total/15;
}