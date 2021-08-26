<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Http\Request;
use App\Models\Project;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Collection;
use Validator;
use App\Http\Resources\Project as ProjectResource;
use \stdClass as stdClass;
use App\Jobs\getProjects;

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
        // $input = $request->all();
        // $validator = Validator::make($input , [
        //     'name'=> 'required',
        //     'description' => 'required',
        //     'language' => 'required'
        // ]);
        //
        // if ($validator->fails()) {
        //     return $this->sendError('Please validate error' ,$validator->errors() );
        // }


        //$repos = Project::all();
      //  dispatch(new getProjects ($repos));

        function storeGithubProjects(){
          $response = Http::get('https://api.github.com/users/Ayoubkassi/repos');
          $my_repos=[];
          $data = json_decode($response->getBody(), true);


          for($i =0; $i<count($data);$i++){

              $repo              = new stdClass();
              $repo->name        = $data[$i]["name"];
              $repo->description = /*$data[$i]["description"]*/"no description";
              $repo->stars       = $data[$i]["stargazers_count"];
              $repo->language    = $data[$i]["language"] == null ? "no language" : $data[$i]["language"];
              $repo->date        = $data[$i]["created_at"];
              $repo->size        = $data[$i]["size"];
              $repo->forks       = $data[$i]["forks"];
              $repo->issues      = $data[$i]["open_issues"];
              $my_repos[$i]      = $repo;
              $repo_array = (array) $repo;

              $project = Project::where('name', '=', $repo->name)->first();
                 if ($project === null) {
                    $project = Project::create($repo_array);
                 }



          }

          return $project;


        }




        //$github_repos = (array) $repos;
         //foreach($repos as $repo){
          // $new_repo = new stdClass();
          // $new_repo->name = $repo["name"];


        //  array_push($my_repos,$repo["name"]);
         //}


         $project = storeGithubProjects();
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
