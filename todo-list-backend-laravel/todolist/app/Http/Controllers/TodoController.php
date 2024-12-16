<?php  

namespace App\Http\Controllers;  

use App\Models\Todo;  
use Illuminate\Http\Request;  

class TodoController extends Controller  
{  
    // Get all todos  
    public function index()  
    {  
        return Todo::all();  
    }  

    // Store a new todo  
    public function store(Request $request)  
    {  
        $request->validate([  
            'title' => 'required|string|max:255',  
            'completed' => 'nullable|string',  
        ]);  

        return Todo::create($request->all());  
    }  

    // Show a specific todo  
    public function show($id)  
    {  
        return Todo::findOrFail($id);  
    }  

    // Update a todo  
    public function update(Request $request, $id)  
    {  
        $todo = Todo::findOrFail($id);  
        $request->validate([  
            'title' => 'sometimes|required|string|max:255',  
            'completed' => 'nullable|string',  
        ]);  

        $todo->update($request->all());  
        return $todo;  
    }  

    // Delete a todo  
    public function destroy($id)  
    {  
        $todo = Todo::findOrFail($id);  
        $todo->delete();  
        return response()->noContent();  
    }  
}
