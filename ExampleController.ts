import {FastifyInstance} from "fastify";

interface Healthcheck{
    name:string;
    version:number;
    time:number;
}

class HealthcheckUser{
    name: string;
    version:number;
    time: number;

       constructor(name: string, version: number, time:number){
        this.name= name;
        this.version= version;
        this.time= time;
       }
}

const NameHealthcheck: Healthcheck = new HealthcheckUser("github-api", 1.0, 1657535111970)

const Logs:(string | number | number)[]=["My mom is in love with me", 1.0,-446723100, "I go to the future and my mom end up with the wrong guy",2.0,1445470140,"I go to the past and you will not believe what happens next", 3.0, 1657542667532];

interface UserRegistre{
    username:string;
    token:string;
}

class UserRegistre{
    username: string;
    token: string;

       constructor(name: string, token:string){
        this.username= name;
        this.token= token;
       }
}
let token = "";
let tab=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
for(let i = 0;i == 19; i++){
    function entierAleatoire(min: number, max: number){
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
let entier = entierAleatoire(0, tab.length);
let caractereAleatoire = tab[entier];
token = token + caractereAleatoire;
}

const RegistreUser: UserRegistre = new UserRegistre("lucas", "")

export default class ExampleController {

    private router: FastifyInstance

    constructor(router: FastifyInstance) {
        this.router = router

        router.get('/api',
        this.sayHello.bind(this))

        router.get('/api/healthcheck',
        this.HealthcheckEndpoints.bind(this))

        router.get('/api/timemachine/logs/mcfly',
        this.TimemachineLogs.bind(this))

        router.post('/api/users/register',
        this.RegistreUser.bind(this))
    }

    async sayHello(): Promise<string> {
        return 'Hello, friend'
    }

    async HealthcheckEndpoints(): Promise<HealthcheckUser> {
        return NameHealthcheck
    }

    async TimemachineLogs(){
        return Logs
    }

     async RegistreUser(){
         return RegistreUser
     }

   

}

