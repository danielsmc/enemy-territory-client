var teams = [
    {
        id: "ARI",
        mlb_id: "ari",
        name: "Diamondbacks",
        location: "Arizona",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/arizona-diamondbacks.svg",
        primaryColor: "#A71930",
        secondaryColor: "#000000"
    },
    {
        id: "BOS",
        mlb_id: "bos",
        name: "Red Sox",
        location: "Boston",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/boston-red-sox.svg",
        primaryColor: "#0D2B56",
        secondaryColor: "#BD3039"
    },
    {
        id: "CLE",
        mlb_id: "cle",
        name: "Indians",
        location: "Cleveland",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/cleveland-indians.svg",
        primaryColor: "#E31937",
        secondaryColor: "#002B5C"
    },
    {
        id: "CNR",
        mlb_id: "cin",
        name: "Reds",
        location: "Cincinnati",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/cincinnati-reds.svg",
        primaryColor: "#C6011F",
        secondaryColor: "#000000"
    },
    {
        id: "HOU",
        mlb_id: "hou",
        name: "Astros",
        location: "Houston",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/houston-astros.svg",
        primaryColor: "#0D2B56",
        secondaryColor: "#BD3039"
    },
    {
        id: "NYY",
        mlb_id: "nyy",
        name: "Yankees",
        location: "New York",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/new-york-yankees.svg",
        primaryColor: "#003087",
        secondaryColor: "#E4002B"
    },
    {
        id: "OAK",
        mlb_id: "oak",
        name: "Athletics",
        location: "Oakland",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/oakland-athletics.svg",
        primaryColor: "#003831",
        secondaryColor: "#EFB21E"
    },
    {
        id: "SDP",
        mlb_id: "sd",
        name: "Padres",
        location: "San Diego",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/san-diego-padres.svg",
        primaryColor: "#002D62",
        secondaryColor: "#FEC325"
    },
    {
        id: "SFG",
        mlb_id: "sf",
        name: "Giants",
        location: "San Francisco",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/san-francisco-giants.svg",
        primaryColor: "#FD5A1E",
        secondaryColor: "#000000"
    },
    {
        id: "TOR",
        mlb_id: "tor",
        name: "Blue Jays",
        location: "Toronto",
        logo: "http://jim-nielsen.com/teamcolors/static/img/mlb/toronto-blue-jays.svg",
        primaryColor: "#134A8E",
        secondaryColor: "#1D2D5C"
    }
];

/*
function getAllTeamIds()
{
    var ids = [];

    for (t = 0; t < teams.length; t++)
    {
        ids[t] = teams[t].id;
    }

    return ids;
}

function getDetailsForTeam(team_id)
{
    var team;
    for (t = 0; t < teams.length; t++)
    {
        if (teams[t].id.toLowerCase() == team_id.toLowerCase())
        {
            team = teams[t];
            team.logo = team.logo;
            break;
        }
    }
    return team;
}*/

/*
var mlb_details_url = "http://mlb.mlb.com/shared/properties/style/{team_id}.json";
var mlb_url = "http://mlb.mlb.com"

function getLogoURLForTeam(team_id, callback)
{
    var details = getDetailsForTeam(team_id);
    var mlb_id = details.mlb_id;
    var url = mlb_details_url.replace("{team_id}", mlb_id);

    $.getJSON(url + "?callback=?",function(json){
        var responseObj = JSON.parse(json);
        if (responseObj != null && responseObj.legal_logo1)
        {
            callback(mlb_url + responseObj.legal_logo1.image);
        }
        else
        {
            callback(null);
        }
    });
}
*/