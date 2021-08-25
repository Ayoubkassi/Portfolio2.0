<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Project;
use Validator;
use App\Http\Resources\Project as ProjectResource;

class ProjectController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return $this->sendResponse(ProjectResource::collection($projects),
        'all projects sends successfully'
    );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //use App\Models\Use
        $input = $request->all();
        $validator = Validator::make($input , [
            'name'=> 'required',
            'description' => 'required',
            'language' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Please validate error' ,$validator->errors() );
        }

        $project = Project::create($input);
        return $this->sendResponse(new ProjectResource($project) ,'Project created successfully' );

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $project = Project::find($id);

        if(is_null($project)){
            return $this->sendError('Project not found');

        }
        return $this->sendResponse(new ProjectResource($project) ,'Project Found successfully' );

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        $input = $request->all();
        $validator = Validator::make($input , [
            'name'=> 'required',
            'description' => 'required',
            'language' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Please validate error' ,$validator->errors() );
        }

        $project->name = $input['name'];
        $project->description = $input['description'];
        $project->language = $input['language'];
        return $this->sendResponse(new ProjectResource($project) ,'Project updated successfully' );

        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {   
        $project->delete();
        return $this->sendResponse(new ProjectResource($project) ,'Project deleted successfully' );


    }
}
