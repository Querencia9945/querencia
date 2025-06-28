
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete registration for Tech Summit", completed: false, priority: "high" },
    { id: 2, text: "Submit internship application", completed: false, priority: "medium" },
    { id: 3, text: "Review event materials", completed: true, priority: "low" },
    { id: 4, text: "Network with industry professionals", completed: false, priority: "medium" }
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
          priority: "medium"
        }
      ]);
      setNewTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">To Do List</h1>
          <p className="text-gray-600">Organize your tasks and stay on track with your goals.</p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
            <CardDescription>
              Create a new task to keep track of your activities and goals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-2">
              <Input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task..."
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                className="flex-1"
              />
              <Button onClick={addTask} className="bg-blue-600 hover:bg-blue-700">
                Add Task
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {tasks.map((task) => (
            <Card key={task.id} className={`transition-all ${task.completed ? 'bg-gray-50' : 'bg-white'}`}>
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3 flex-1">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                  />
                  <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                    {task.text}
                  </span>
                  <Badge className={getPriorityColor(task.priority)}>
                    {task.priority}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTask(task.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {tasks.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-gray-500">No tasks yet. Add your first task above!</p>
            </CardContent>
          </Card>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{tasks.filter(t => !t.completed).length}</div>
              <div className="text-sm text-gray-600">Pending Tasks</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{tasks.filter(t => t.completed).length}</div>
              <div className="text-sm text-gray-600">Completed Tasks</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{tasks.length}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
