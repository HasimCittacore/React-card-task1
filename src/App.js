
import './App.css';
import Cards from './components/Cards';
function App() {
  let data = [
    {
      products:"FREE",
      price:0,
      users:"Single User",
      userEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"CommunityAccess",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:false,
      subDomain:"Free SubDomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      products:"PLUS",
      price:9,
      users:"5 Users",
      userEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"CommunityAccess",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Dedicated Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Free SubDomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      products:"PRO",
      price:49,
      users:"Unlimited User",
      userEnabler:true,
      storage:"150GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"CommunityAccess",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phoneSupport:"Unlimited Phone Support",
      phoneSupportEnabler:true,
      subDomain:"Unlimited Free SubDomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    }
  ]
  return (
    <>
    <section className='card_box py-5'>
      
    <div className='container'>
      <div className='row'>
        {
          data.map((e)=>{
            return <Cards data={e}/>
          })
        }
      </div>
    </div>
    </section>
    </>
  );
}

export default App;
