<?php

namespace App\Jobs;

use Illuminate\Support\Facades\Http;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use \stdClass as stdClass;


class getProjects implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public repos;
    public function __construct($repos)
    {
        $this->repos = $repos;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
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

            foreach($this->repos as $value){
                if($value["name"] == $repo->name){
                  
                }
            }
            $project = Project::where('name', '=', $repo->name)->first();
               if ($project === null) {
                  $project = Project::create($repo_array);
               }



        }

        return $project;


      }
    }
}
