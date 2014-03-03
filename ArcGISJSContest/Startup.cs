using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ArcGISJSContest.Startup))]
namespace ArcGISJSContest
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
