players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32,
        "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33,
        "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32,
        "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

class player:
    all_players = []
    def __init__(self, players):
        self.name = players['name']
        self.age = players['age']
        self.position = players['position']
        self.team = players['team']
        player.all_players.append(self)
    
    def display_info(self):
        print(self.name)
        
    @classmethod
    def get_team(cls, team_list):
        players_list = []
        for i in range(len(team_list)):
            players_list.append(player(team_list[i]))
        return players_list
        
kevin = player(players[0])

jason = player(players[1])

kyrie = player(players[2])

arr_of_all_players = []
for i in range(len(players)):
    arr_of_all_players.append(player(players[i]))

print(arr_of_all_players)

print("*"*50)
   
team_list = player.get_team(players) 

print(team_list)
        