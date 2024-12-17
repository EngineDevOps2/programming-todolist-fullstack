<?php  

namespace AppHttpControllers;  

use AppModelsTodo;  
use IlluminateHttpRequest;  

class TodoController extends Controller  
{  
    // Get all todos  
    public function index()  
    {  
        return response()->json(Todo::all(), 200);  
    }  

    // Store a new todo  
    public function store(Request $request)  
    {  
        $request->validate([  
            'title' => 'required|string|max:255',  
            'completed' => 'nullable|boolean',  
        ]);  

        $todo = Todo::create($request->all());  
        return response()->json($todo, 201);  
    }  

    // Show a specific todo  
    public function show($id)  
    {  
        $todo = Todo::findOrFail($id);  
        return response()->json($todo, 200);  
    }  

    // Update a todo  
    public function update(Request $request, $id)  
    {  
        $todo = Todo::findOrFail($id);  
        $request->validate([  
            'title' => 'sometimes|required|string|max:255',  
            'completed' => 'nullable|boolean',  
        ]);  

        $todo->update($request->all());  
        return response()->json($todo, 200);  
    }  

    // Delete a todo  
    public function destroy($id)  
    {  
        $todo = Todo::findOrFail($id);  
        $todo->delete();  
        return response()->noContent();  
    }  
}
