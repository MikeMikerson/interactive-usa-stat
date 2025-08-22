export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface StateQuiz {
  state: string;
  questions: QuizQuestion[];
}

export const quizData: StateQuiz[] = [
  {
    state: "California",
    questions: [
      {
        question: "What is the capital of California?",
        options: ["Los Angeles", "San Francisco", "Sacramento", "San Diego"],
        correctAnswer: 2,
        explanation: "Sacramento has been California's capital since 1854."
      },
      {
        question: "What is California's state nickname?",
        options: ["The Sunshine State", "The Golden State", "The Pacific State", "The Bear State"],
        correctAnswer: 1,
        explanation: "California is known as 'The Golden State' due to the Gold Rush and golden poppies."
      },
      {
        question: "Which national park in California is famous for giant sequoia trees?",
        options: ["Yosemite", "Joshua Tree", "Sequoia", "Death Valley"],
        correctAnswer: 2,
        explanation: "Sequoia National Park is home to some of the world's largest trees by volume."
      }
    ]
  },
  {
    state: "Texas",
    questions: [
      {
        question: "What is the capital of Texas?",
        options: ["Houston", "Dallas", "Austin", "San Antonio"],
        correctAnswer: 2,
        explanation: "Austin has been Texas's capital since 1839."
      },
      {
        question: "What is Texas's state nickname?",
        options: ["The Lone Star State", "The Cowboy State", "The Oil State", "The Big State"],
        correctAnswer: 0,
        explanation: "Texas is called 'The Lone Star State' from its former status as an independent republic."
      },
      {
        question: "Which is the largest city in Texas by population?",
        options: ["Austin", "Dallas", "San Antonio", "Houston"],
        correctAnswer: 3,
        explanation: "Houston is the most populous city in Texas and the fourth-largest in the US."
      }
    ]
  },
  {
    state: "New York",
    questions: [
      {
        question: "What is the capital of New York?",
        options: ["New York City", "Buffalo", "Albany", "Rochester"],
        correctAnswer: 2,
        explanation: "Albany has been New York's capital since 1797."
      },
      {
        question: "What is New York's state nickname?",
        options: ["The Big Apple State", "The Empire State", "The Liberty State", "The Hudson State"],
        correctAnswer: 1,
        explanation: "New York is known as 'The Empire State' due to its wealth and resources."
      },
      {
        question: "Which famous statue is located in New York Harbor?",
        options: ["Statue of Liberty", "Statue of Justice", "Statue of Freedom", "Statue of Democracy"],
        correctAnswer: 0,
        explanation: "The Statue of Liberty was a gift from France and symbolizes freedom and democracy."
      }
    ]
  },
  {
    state: "Florida",
    questions: [
      {
        question: "What is the capital of Florida?",
        options: ["Miami", "Orlando", "Jacksonville", "Tallahassee"],
        correctAnswer: 3,
        explanation: "Tallahassee has been Florida's capital since 1824."
      },
      {
        question: "What is Florida's state nickname?",
        options: ["The Sunshine State", "The Orange State", "The Peninsula State", "The Beach State"],
        correctAnswer: 0,
        explanation: "Florida is known as 'The Sunshine State' for its warm climate and abundant sunshine."
      },
      {
        question: "Which national park in Florida is known for its wetlands?",
        options: ["Big Cypress", "Dry Tortugas", "Everglades", "Biscayne"],
        correctAnswer: 2,
        explanation: "Everglades National Park protects the largest tropical wilderness in the US."
      }
    ]
  },
  {
    state: "Alaska",
    questions: [
      {
        question: "What is the capital of Alaska?",
        options: ["Anchorage", "Fairbanks", "Juneau", "Nome"],
        correctAnswer: 2,
        explanation: "Juneau has been Alaska's capital since 1906."
      },
      {
        question: "What is Alaska's state nickname?",
        options: ["The Last Frontier", "The Frozen State", "The Northern State", "The Wild State"],
        correctAnswer: 0,
        explanation: "Alaska is called 'The Last Frontier' due to its remote wilderness and late statehood."
      },
      {
        question: "What is the highest mountain in Alaska and North America?",
        options: ["Mount McKinley", "Denali", "Mount Foraker", "Mount Hunter"],
        correctAnswer: 1,
        explanation: "Denali (formerly Mount McKinley) is the highest peak in North America at 20,310 feet."
      }
    ]
  },
  {
    state: "Illinois",
    questions: [
      {
        question: "What is the capital of Illinois?",
        options: ["Chicago", "Springfield", "Rockford", "Peoria"],
        correctAnswer: 1,
        explanation: "Springfield has been Illinois's capital since 1837."
      },
      {
        question: "What is Illinois's state nickname?",
        options: ["The Windy State", "The Prairie State", "The Corn State", "The Lincoln State"],
        correctAnswer: 1,
        explanation: "Illinois is known as 'The Prairie State' for its vast grasslands."
      },
      {
        question: "Which president is strongly associated with Illinois?",
        options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "Theodore Roosevelt"],
        correctAnswer: 2,
        explanation: "Abraham Lincoln began his political career in Illinois and is buried in Springfield."
      }
    ]
  },
  {
    state: "Nevada",
    questions: [
      {
        question: "What is the capital of Nevada?",
        options: ["Las Vegas", "Reno", "Carson City", "Henderson"],
        correctAnswer: 2,
        explanation: "Carson City has been Nevada's capital since statehood in 1864."
      },
      {
        question: "What is Nevada's state nickname?",
        options: ["The Silver State", "The Desert State", "The Gambling State", "The Mining State"],
        correctAnswer: 0,
        explanation: "Nevada is called 'The Silver State' due to its rich silver mining history."
      },
      {
        question: "Which desert covers much of Nevada?",
        options: ["Mojave Desert", "Sonoran Desert", "Great Basin Desert", "Chihuahuan Desert"],
        correctAnswer: 2,
        explanation: "The Great Basin Desert covers most of Nevada and parts of surrounding states."
      }
    ]
  },
  {
    state: "Colorado",
    questions: [
      {
        question: "What is the capital of Colorado?",
        options: ["Colorado Springs", "Boulder", "Denver", "Fort Collins"],
        correctAnswer: 2,
        explanation: "Denver has been Colorado's capital since statehood in 1876."
      },
      {
        question: "What is Colorado's state nickname?",
        options: ["The Mountain State", "The Centennial State", "The Rocky State", "The High State"],
        correctAnswer: 1,
        explanation: "Colorado is called 'The Centennial State' because it became a state in 1876, the centennial year."
      },
      {
        question: "What is Denver's nickname?",
        options: ["The Mile High City", "The Rocky City", "The Mountain City", "The Snow City"],
        correctAnswer: 0,
        explanation: "Denver is called 'The Mile High City' because its elevation is approximately 5,280 feet (one mile) above sea level."
      }
    ]
  },
  {
    state: "Washington",
    questions: [
      {
        question: "What is the capital of Washington?",
        options: ["Seattle", "Spokane", "Olympia", "Tacoma"],
        correctAnswer: 2,
        explanation: "Olympia has been Washington's capital since statehood in 1889."
      },
      {
        question: "What is Washington's state nickname?",
        options: ["The Evergreen State", "The Rainy State", "The Pacific State", "The Apple State"],
        correctAnswer: 0,
        explanation: "Washington is called 'The Evergreen State' for its abundant evergreen forests."
      },
      {
        question: "Which mountain range runs through Washington?",
        options: ["Rocky Mountains", "Appalachian Mountains", "Cascade Range", "Sierra Nevada"],
        correctAnswer: 2,
        explanation: "The Cascade Range runs north-south through Washington, including Mount Rainier and Mount Baker."
      },
      {
        question: "What major technology company was founded in Washington?",
        options: ["Apple", "Google", "Microsoft", "Facebook"],
        correctAnswer: 2,
        explanation: "Microsoft was founded in Albuquerque but moved to and is headquartered in Redmond, Washington."
      }
    ]
  },
  {
    state: "Oregon",
    questions: [
      {
        question: "What is the capital of Oregon?",
        options: ["Portland", "Eugene", "Salem", "Bend"],
        correctAnswer: 2,
        explanation: "Salem has been Oregon's capital since 1851."
      },
      {
        question: "What is Oregon's state nickname?",
        options: ["The Beaver State", "The Pine State", "The Pacific State", "The Trail State"],
        correctAnswer: 0,
        explanation: "Oregon is called 'The Beaver State' after the state animal and its historical fur trade."
      },
      {
        question: "Which famous trail ended in Oregon?",
        options: ["Santa Fe Trail", "Oregon Trail", "California Trail", "Mormon Trail"],
        correctAnswer: 1,
        explanation: "The Oregon Trail was a 2,170-mile wagon route that brought pioneers to Oregon Territory."
      },
      {
        question: "What is Oregon's state motto?",
        options: ["She Flies With Her Own Wings", "Union", "Live Free or Die", "The People Rule"],
        correctAnswer: 0,
        explanation: "Oregon's motto 'Alis Volat Propriis' translates to 'She Flies With Her Own Wings.'"
      }
    ]
  },
  {
    state: "Hawaii",
    questions: [
      {
        question: "What is the capital of Hawaii?",
        options: ["Hilo", "Honolulu", "Kailua", "Pearl City"],
        correctAnswer: 1,
        explanation: "Honolulu, located on the island of Oahu, has been Hawaii's capital since statehood in 1959."
      },
      {
        question: "What is Hawaii's state nickname?",
        options: ["The Aloha State", "The Paradise State", "The Island State", "The Tropical State"],
        correctAnswer: 0,
        explanation: "Hawaii is known as 'The Aloha State' from the Hawaiian word 'aloha' meaning love, peace, and compassion."
      },
      {
        question: "How many main islands make up the Hawaiian island chain?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 1,
        explanation: "Hawaii consists of 8 main islands: Hawaiʻi (Big Island), Maui, Oʻahu, Kauaʻi, Molokaʻi, Lānaʻi, Niʻihau, and Kahoʻolawe."
      },
      {
        question: "Which Hawaiian island is known as the 'Big Island'?",
        options: ["Oahu", "Maui", "Hawaii", "Kauai"],
        correctAnswer: 2,
        explanation: "The island of Hawaii is called the 'Big Island' because it's the largest island in the Hawaiian chain."
      },
      {
        question: "What is Hawaii's state flower?",
        options: ["Plumeria", "Hibiscus", "Bird of Paradise", "Orchid"],
        correctAnswer: 1,
        explanation: "The yellow hibiscus (Hibiscus brackenridgei) is Hawaii's official state flower."
      },
      {
        question: "Which volcano in Hawaii is one of the most active in the world?",
        options: ["Mauna Loa", "Kilauea", "Mauna Kea", "Diamond Head"],
        correctAnswer: 1,
        explanation: "Kilauea volcano has been erupting continuously since 1983, making it one of the world's most active volcanoes."
      }
    ]
  },
  {
    state: "Alabama",
    questions: [
      {
        question: "What is the capital of Alabama?",
        options: ["Birmingham", "Mobile", "Montgomery", "Huntsville"],
        correctAnswer: 2,
        explanation: "Montgomery has been Alabama's capital since 1846."
      },
      {
        question: "What is Alabama's state nickname?",
        options: ["The Heart of Dixie", "The Cotton State", "The Yellowhammer State", "Both A and C"],
        correctAnswer: 3,
        explanation: "Alabama is known as both 'The Heart of Dixie' and 'The Yellowhammer State'."
      },
      {
        question: "Which civil rights leader was born in Alabama?",
        options: ["Martin Luther King Jr.", "Rosa Parks", "Malcolm X", "Frederick Douglass"],
        correctAnswer: 0,
        explanation: "Martin Luther King Jr. was born in Atlanta but led the Montgomery Bus Boycott in Alabama."
      }
    ]
  },
  {
    state: "Arizona",
    questions: [
      {
        question: "What is the capital of Arizona?",
        options: ["Tucson", "Phoenix", "Flagstaff", "Mesa"],
        correctAnswer: 1,
        explanation: "Phoenix has been Arizona's capital since statehood in 1912."
      },
      {
        question: "What is Arizona's state nickname?",
        options: ["The Copper State", "The Desert State", "The Grand Canyon State", "The Cactus State"],
        correctAnswer: 2,
        explanation: "Arizona is known as 'The Grand Canyon State' for its famous natural wonder."
      },
      {
        question: "Which famous natural landmark is located in Arizona?",
        options: ["Yellowstone", "Grand Canyon", "Yosemite Valley", "Mount Rushmore"],
        correctAnswer: 1,
        explanation: "The Grand Canyon is one of Arizona's most famous attractions and a UNESCO World Heritage Site."
      }
    ]
  },
  {
    state: "Arkansas",
    questions: [
      {
        question: "What is the capital of Arkansas?",
        options: ["Fort Smith", "Little Rock", "Fayetteville", "Hot Springs"],
        correctAnswer: 1,
        explanation: "Little Rock has been Arkansas's capital since 1821."
      },
      {
        question: "What is Arkansas's state nickname?",
        options: ["The Natural State", "The Land of Opportunity", "The Wonder State", "All of the above"],
        correctAnswer: 3,
        explanation: "Arkansas has been known by all these nicknames, with 'The Natural State' being the current official one."
      },
      {
        question: "What precious stone can be found in Arkansas?",
        options: ["Emeralds", "Diamonds", "Rubies", "Sapphires"],
        correctAnswer: 1,
        explanation: "Arkansas is the only US state where diamonds are mined, at Crater of Diamonds State Park."
      }
    ]
  },
  {
    state: "Connecticut",
    questions: [
      {
        question: "What is the capital of Connecticut?",
        options: ["New Haven", "Bridgeport", "Hartford", "Stamford"],
        correctAnswer: 2,
        explanation: "Hartford has been Connecticut's capital since 1875."
      },
      {
        question: "What is Connecticut's state nickname?",
        options: ["The Constitution State", "The Nutmeg State", "The Land of Steady Habits", "All of the above"],
        correctAnswer: 3,
        explanation: "Connecticut is known by all these nicknames, reflecting its history and character."
      },
      {
        question: "Which Ivy League university is located in Connecticut?",
        options: ["Harvard", "Princeton", "Yale", "Columbia"],
        correctAnswer: 2,
        explanation: "Yale University, founded in 1701, is located in New Haven, Connecticut."
      }
    ]
  },
  {
    state: "Delaware",
    questions: [
      {
        question: "What is the capital of Delaware?",
        options: ["Wilmington", "Newark", "Dover", "Rehoboth Beach"],
        correctAnswer: 2,
        explanation: "Dover has been Delaware's capital since 1777."
      },
      {
        question: "What is Delaware's state nickname?",
        options: ["The First State", "The Diamond State", "The Small Wonder", "Both A and C"],
        correctAnswer: 3,
        explanation: "Delaware is known as both 'The First State' and 'The Small Wonder'."
      },
      {
        question: "Why is Delaware called 'The First State'?",
        options: ["It was discovered first", "It ratified the Constitution first", "It was settled first", "It became independent first"],
        correctAnswer: 1,
        explanation: "Delaware was the first state to ratify the US Constitution on December 7, 1787."
      }
    ]
  },
  {
    state: "Georgia",
    questions: [
      {
        question: "What is the capital of Georgia?",
        options: ["Savannah", "Columbus", "Atlanta", "Augusta"],
        correctAnswer: 2,
        explanation: "Atlanta has been Georgia's capital since 1868."
      },
      {
        question: "What is Georgia's state nickname?",
        options: ["The Peach State", "The Empire State of the South", "Both A and B", "The Cracker State"],
        correctAnswer: 2,
        explanation: "Georgia is known as both 'The Peach State' and 'The Empire State of the South'."
      },
      {
        question: "Which major event was held in Atlanta in 1996?",
        options: ["World Cup", "Super Bowl", "Summer Olympics", "World Series"],
        correctAnswer: 2,
        explanation: "Atlanta hosted the 1996 Summer Olympics, known as the Centennial Olympic Games."
      }
    ]
  },
  {
    state: "Idaho",
    questions: [
      {
        question: "What is the capital of Idaho?",
        options: ["Pocatello", "Coeur d'Alene", "Boise", "Idaho Falls"],
        correctAnswer: 2,
        explanation: "Boise has been Idaho's capital since statehood in 1890."
      },
      {
        question: "What is Idaho's state nickname?",
        options: ["The Potato State", "The Gem State", "The Scenic State", "The Mountain State"],
        correctAnswer: 1,
        explanation: "Idaho is known as 'The Gem State' for its abundance of natural resources and gems."
      },
      {
        question: "What crop is Idaho most famous for producing?",
        options: ["Wheat", "Corn", "Potatoes", "Apples"],
        correctAnswer: 2,
        explanation: "Idaho produces about one-third of all potatoes grown in the United States."
      }
    ]
  },
  {
    state: "Indiana",
    questions: [
      {
        question: "What is the capital of Indiana?",
        options: ["Fort Wayne", "Evansville", "Indianapolis", "South Bend"],
        correctAnswer: 2,
        explanation: "Indianapolis has been Indiana's capital since statehood in 1816."
      },
      {
        question: "What is Indiana's state nickname?",
        options: ["The Crossroads State", "The Hoosier State", "The Racing State", "The Corn State"],
        correctAnswer: 1,
        explanation: "Indiana is known as 'The Hoosier State', though the origin of 'Hoosier' is uncertain."
      },
      {
        question: "Which famous car race takes place in Indianapolis?",
        options: ["Daytona 500", "Indianapolis 500", "Formula One", "NASCAR Championship"],
        correctAnswer: 1,
        explanation: "The Indianapolis 500 is held annually at the Indianapolis Motor Speedway since 1911."
      }
    ]
  },
  {
    state: "Iowa",
    questions: [
      {
        question: "What is the capital of Iowa?",
        options: ["Cedar Rapids", "Davenport", "Des Moines", "Iowa City"],
        correctAnswer: 2,
        explanation: "Des Moines has been Iowa's capital since 1857."
      },
      {
        question: "What is Iowa's state nickname?",
        options: ["The Corn State", "The Hawkeye State", "The Farm State", "The Prairie State"],
        correctAnswer: 1,
        explanation: "Iowa is known as 'The Hawkeye State' after Chief Black Hawk, a Sauk leader."
      },
      {
        question: "What is Iowa particularly known for in agriculture?",
        options: ["Wheat production", "Cattle ranching", "Corn and soybeans", "Apple orchards"],
        correctAnswer: 2,
        explanation: "Iowa is a leading producer of corn and soybeans in the United States."
      }
    ]
  },
  {
    state: "Kansas",
    questions: [
      {
        question: "What is the capital of Kansas?",
        options: ["Wichita", "Kansas City", "Topeka", "Lawrence"],
        correctAnswer: 2,
        explanation: "Topeka has been Kansas's capital since statehood in 1861."
      },
      {
        question: "What is Kansas's state nickname?",
        options: ["The Wheat State", "The Sunflower State", "The Prairie State", "The Tornado State"],
        correctAnswer: 1,
        explanation: "Kansas is known as 'The Sunflower State' for its native wild sunflowers."
      },
      {
        question: "What famous story features a girl from Kansas?",
        options: ["Alice in Wonderland", "The Wizard of Oz", "Little House on the Prairie", "Anne of Green Gables"],
        correctAnswer: 1,
        explanation: "Dorothy from 'The Wizard of Oz' lived in Kansas before being swept away to the land of Oz."
      }
    ]
  },
  {
    state: "Kentucky",
    questions: [
      {
        question: "What is the capital of Kentucky?",
        options: ["Louisville", "Lexington", "Frankfort", "Bowling Green"],
        correctAnswer: 2,
        explanation: "Frankfort has been Kentucky's capital since statehood in 1792."
      },
      {
        question: "What is Kentucky's state nickname?",
        options: ["The Bluegrass State", "The Derby State", "The Bourbon State", "The Horse State"],
        correctAnswer: 0,
        explanation: "Kentucky is known as 'The Bluegrass State' for its bluegrass meadows."
      },
      {
        question: "Which famous horse race is held in Kentucky?",
        options: ["Preakness Stakes", "Belmont Stakes", "Kentucky Derby", "Breeders' Cup"],
        correctAnswer: 2,
        explanation: "The Kentucky Derby, 'The Most Exciting Two Minutes in Sports', is held at Churchill Downs in Louisville."
      }
    ]
  },
  {
    state: "Louisiana",
    questions: [
      {
        question: "What is the capital of Louisiana?",
        options: ["New Orleans", "Shreveport", "Baton Rouge", "Lafayette"],
        correctAnswer: 2,
        explanation: "Baton Rouge has been Louisiana's capital since 1849."
      },
      {
        question: "What is Louisiana's state nickname?",
        options: ["The Pelican State", "The Bayou State", "The Creole State", "Both A and B"],
        correctAnswer: 3,
        explanation: "Louisiana is known as both 'The Pelican State' and 'The Bayou State'."
      },
      {
        question: "What cultural festival is New Orleans famous for?",
        options: ["Jazz Festival", "Mardi Gras", "French Quarter Festival", "All of the above"],
        correctAnswer: 3,
        explanation: "New Orleans is famous for all these festivals, with Mardi Gras being the most well-known."
      }
    ]
  },
  {
    state: "Maine",
    questions: [
      {
        question: "What is the capital of Maine?",
        options: ["Portland", "Bangor", "Augusta", "Lewiston"],
        correctAnswer: 2,
        explanation: "Augusta has been Maine's capital since statehood in 1820."
      },
      {
        question: "What is Maine's state nickname?",
        options: ["The Lobster State", "The Pine Tree State", "The Lighthouse State", "The Vacationland"],
        correctAnswer: 1,
        explanation: "Maine is known as 'The Pine Tree State' for its extensive forests."
      },
      {
        question: "What seafood is Maine most famous for?",
        options: ["Crab", "Lobster", "Clams", "Scallops"],
        correctAnswer: 1,
        explanation: "Maine lobster is considered some of the finest in the world."
      }
    ]
  },
  {
    state: "Maryland",
    questions: [
      {
        question: "What is the capital of Maryland?",
        options: ["Baltimore", "Annapolis", "Frederick", "Rockville"],
        correctAnswer: 1,
        explanation: "Annapolis has been Maryland's capital since 1694."
      },
      {
        question: "What is Maryland's state nickname?",
        options: ["The Old Line State", "The Free State", "The Chesapeake State", "Both A and B"],
        correctAnswer: 3,
        explanation: "Maryland is known as both 'The Old Line State' and 'The Free State'."
      },
      {
        question: "Which bay is central to Maryland's geography and economy?",
        options: ["Delaware Bay", "Chesapeake Bay", "Hudson Bay", "Tampa Bay"],
        correctAnswer: 1,
        explanation: "The Chesapeake Bay is the largest estuary in the United States and vital to Maryland."
      }
    ]
  },
  {
    state: "Massachusetts",
    questions: [
      {
        question: "What is the capital of Massachusetts?",
        options: ["Worcester", "Springfield", "Boston", "Cambridge"],
        correctAnswer: 2,
        explanation: "Boston has been Massachusetts's capital since colonial times."
      },
      {
        question: "What is Massachusetts's state nickname?",
        options: ["The Bay State", "The Old Colony State", "The Pilgrim State", "Both A and B"],
        correctAnswer: 3,
        explanation: "Massachusetts is known as both 'The Bay State' and 'The Old Colony State'."
      },
      {
        question: "Which famous university is located in Cambridge, Massachusetts?",
        options: ["MIT", "Harvard", "Both A and B", "Yale"],
        correctAnswer: 2,
        explanation: "Both Harvard University and MIT are located in Cambridge, Massachusetts."
      }
    ]
  },
  {
    state: "Michigan",
    questions: [
      {
        question: "What is the capital of Michigan?",
        options: ["Detroit", "Grand Rapids", "Lansing", "Ann Arbor"],
        correctAnswer: 2,
        explanation: "Lansing has been Michigan's capital since 1847."
      },
      {
        question: "What is Michigan's state nickname?",
        options: ["The Great Lakes State", "The Wolverine State", "Both A and B", "The Motor State"],
        correctAnswer: 2,
        explanation: "Michigan is known as both 'The Great Lakes State' and 'The Wolverine State'."
      },
      {
        question: "Which industry is Detroit famous for?",
        options: ["Steel production", "Automobile manufacturing", "Textile production", "Oil refining"],
        correctAnswer: 1,
        explanation: "Detroit is known as the 'Motor City' for being the center of the American auto industry."
      }
    ]
  },
  {
    state: "Minnesota",
    questions: [
      {
        question: "What is the capital of Minnesota?",
        options: ["Minneapolis", "Duluth", "Saint Paul", "Rochester"],
        correctAnswer: 2,
        explanation: "Saint Paul has been Minnesota's capital since statehood in 1858."
      },
      {
        question: "What is Minnesota's state nickname?",
        options: ["The Land of 10,000 Lakes", "The North Star State", "The Gopher State", "All of the above"],
        correctAnswer: 3,
        explanation: "Minnesota is known by all these nicknames, with 'Land of 10,000 Lakes' being most famous."
      },
      {
        question: "Which twin city is paired with Saint Paul?",
        options: ["Duluth", "Minneapolis", "Rochester", "Bloomington"],
        correctAnswer: 1,
        explanation: "Minneapolis and Saint Paul are known as the 'Twin Cities'."
      }
    ]
  },
  {
    state: "Mississippi",
    questions: [
      {
        question: "What is the capital of Mississippi?",
        options: ["Biloxi", "Gulfport", "Jackson", "Hattiesburg"],
        correctAnswer: 2,
        explanation: "Jackson has been Mississippi's capital since 1821."
      },
      {
        question: "What is Mississippi's state nickname?",
        options: ["The Magnolia State", "The Hospitality State", "Both A and B", "The Delta State"],
        correctAnswer: 2,
        explanation: "Mississippi is known as both 'The Magnolia State' and 'The Hospitality State'."
      },
      {
        question: "Which major river forms Mississippi's western border?",
        options: ["Tennessee River", "Mississippi River", "Arkansas River", "Red River"],
        correctAnswer: 1,
        explanation: "The Mississippi River forms the entire western border of the state of Mississippi."
      }
    ]
  },
  {
    state: "Missouri",
    questions: [
      {
        question: "What is the capital of Missouri?",
        options: ["St. Louis", "Kansas City", "Jefferson City", "Springfield"],
        correctAnswer: 2,
        explanation: "Jefferson City has been Missouri's capital since statehood in 1821."
      },
      {
        question: "What is Missouri's state nickname?",
        options: ["The Show Me State", "The Gateway State", "The Cave State", "Both A and C"],
        correctAnswer: 3,
        explanation: "Missouri is known as both 'The Show Me State' and 'The Cave State'."
      },
      {
        question: "Which famous arch is located in St. Louis?",
        options: ["Golden Gate", "Gateway Arch", "St. Louis Arch", "Freedom Arch"],
        correctAnswer: 1,
        explanation: "The Gateway Arch in St. Louis is a 630-foot monument and symbol of westward expansion."
      }
    ]
  },
  {
    state: "Montana",
    questions: [
      {
        question: "What is the capital of Montana?",
        options: ["Billings", "Missoula", "Helena", "Great Falls"],
        correctAnswer: 2,
        explanation: "Helena has been Montana's capital since statehood in 1889."
      },
      {
        question: "What is Montana's state nickname?",
        options: ["Big Sky Country", "The Treasure State", "Both A and B", "The Mountain State"],
        correctAnswer: 2,
        explanation: "Montana is known as both 'Big Sky Country' and 'The Treasure State'."
      },
      {
        question: "Which national park is partially located in Montana?",
        options: ["Yellowstone", "Glacier", "Both A and B", "Grand Teton"],
        correctAnswer: 2,
        explanation: "Both Yellowstone and Glacier National Parks are partially located in Montana."
      }
    ]
  },
  {
    state: "Nebraska",
    questions: [
      {
        question: "What is the capital of Nebraska?",
        options: ["Omaha", "Grand Island", "Lincoln", "Kearney"],
        correctAnswer: 2,
        explanation: "Lincoln has been Nebraska's capital since statehood in 1867."
      },
      {
        question: "What is Nebraska's state nickname?",
        options: ["The Cornhusker State", "The Beef State", "The Prairie State", "The Plains State"],
        correctAnswer: 0,
        explanation: "Nebraska is known as 'The Cornhusker State' for its corn production."
      },
      {
        question: "What unique feature does Nebraska's legislature have?",
        options: ["It's the largest", "It's unicameral", "It meets only once a year", "It has no political parties"],
        correctAnswer: 1,
        explanation: "Nebraska has the only unicameral (single-chamber) state legislature in the United States."
      }
    ]
  },
  {
    state: "New Hampshire",
    questions: [
      {
        question: "What is the capital of New Hampshire?",
        options: ["Manchester", "Nashua", "Concord", "Portsmouth"],
        correctAnswer: 2,
        explanation: "Concord has been New Hampshire's capital since 1808."
      },
      {
        question: "What is New Hampshire's state nickname?",
        options: ["The Granite State", "The Live Free or Die State", "Both A and B", "The White Mountain State"],
        correctAnswer: 2,
        explanation: "New Hampshire is known as both 'The Granite State' and for its motto 'Live Free or Die'."
      },
      {
        question: "What is New Hampshire famous for in presidential politics?",
        options: ["First caucuses", "First primary", "Most electoral votes", "Swing state"],
        correctAnswer: 1,
        explanation: "New Hampshire traditionally holds the first presidential primary in the nation."
      }
    ]
  },
  {
    state: "New Jersey",
    questions: [
      {
        question: "What is the capital of New Jersey?",
        options: ["Newark", "Jersey City", "Trenton", "Atlantic City"],
        correctAnswer: 2,
        explanation: "Trenton has been New Jersey's capital since 1790."
      },
      {
        question: "What is New Jersey's state nickname?",
        options: ["The Garden State", "The Shore State", "The Liberty State", "The Industrial State"],
        correctAnswer: 0,
        explanation: "New Jersey is known as 'The Garden State' for its fertile farmland."
      },
      {
        question: "Which famous inventor had his main laboratory in New Jersey?",
        options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Benjamin Franklin"],
        correctAnswer: 2,
        explanation: "Thomas Edison's main laboratory and home were in Menlo Park and West Orange, New Jersey."
      }
    ]
  },
  {
    state: "New Mexico",
    questions: [
      {
        question: "What is the capital of New Mexico?",
        options: ["Albuquerque", "Las Cruces", "Santa Fe", "Roswell"],
        correctAnswer: 2,
        explanation: "Santa Fe has been New Mexico's capital since 1610, making it the oldest state capital."
      },
      {
        question: "What is New Mexico's state nickname?",
        options: ["The Land of Enchantment", "The Desert State", "The Atomic State", "The Pueblo State"],
        correctAnswer: 0,
        explanation: "New Mexico is known as 'The Land of Enchantment' for its natural beauty and rich culture."
      },
      {
        question: "What famous incident allegedly occurred in Roswell, New Mexico?",
        options: ["First atomic bomb test", "UFO crash", "Gold discovery", "Railroad completion"],
        correctAnswer: 1,
        explanation: "The alleged 1947 UFO crash in Roswell has become a famous part of American folklore."
      }
    ]
  },
  {
    state: "North Carolina",
    questions: [
      {
        question: "What is the capital of North Carolina?",
        options: ["Charlotte", "Greensboro", "Raleigh", "Durham"],
        correctAnswer: 2,
        explanation: "Raleigh has been North Carolina's capital since 1792."
      },
      {
        question: "What is North Carolina's state nickname?",
        options: ["The Tar Heel State", "The Old North State", "Both A and B", "The First in Flight State"],
        correctAnswer: 2,
        explanation: "North Carolina is known as both 'The Tar Heel State' and 'The Old North State'."
      },
      {
        question: "What historic first flight took place in North Carolina?",
        options: ["First balloon flight", "Wright brothers' first airplane flight", "First helicopter flight", "First jet flight"],
        correctAnswer: 1,
        explanation: "The Wright brothers' first powered airplane flight occurred at Kitty Hawk in 1903."
      }
    ]
  },
  {
    state: "North Dakota",
    questions: [
      {
        question: "What is the capital of North Dakota?",
        options: ["Fargo", "Grand Forks", "Bismarck", "Minot"],
        correctAnswer: 2,
        explanation: "Bismarck has been North Dakota's capital since statehood in 1889."
      },
      {
        question: "What is North Dakota's state nickname?",
        options: ["The Peace Garden State", "The Roughrider State", "The Flickertail State", "All of the above"],
        correctAnswer: 3,
        explanation: "North Dakota is known by all these nicknames."
      },
      {
        question: "What major industry has grown significantly in North Dakota recently?",
        options: ["Technology", "Oil production", "Tourism", "Manufacturing"],
        correctAnswer: 1,
        explanation: "The Bakken oil boom has significantly impacted North Dakota's economy in recent years."
      }
    ]
  },
  {
    state: "Ohio",
    questions: [
      {
        question: "What is the capital of Ohio?",
        options: ["Cleveland", "Cincinnati", "Columbus", "Toledo"],
        correctAnswer: 2,
        explanation: "Columbus has been Ohio's capital since 1816."
      },
      {
        question: "What is Ohio's state nickname?",
        options: ["The Buckeye State", "The Heart of America", "The Mother of Presidents", "Both A and C"],
        correctAnswer: 3,
        explanation: "Ohio is known as both 'The Buckeye State' and 'The Mother of Presidents'."
      },
      {
        question: "How many U.S. presidents were born in Ohio?",
        options: ["5", "7", "9", "11"],
        correctAnswer: 1,
        explanation: "Seven U.S. presidents were born in Ohio, earning it the nickname 'Mother of Presidents'."
      }
    ]
  },
  {
    state: "Oklahoma",
    questions: [
      {
        question: "What is the capital of Oklahoma?",
        options: ["Tulsa", "Norman", "Oklahoma City", "Lawton"],
        correctAnswer: 2,
        explanation: "Oklahoma City has been Oklahoma's capital since statehood in 1907."
      },
      {
        question: "What is Oklahoma's state nickname?",
        options: ["The Sooner State", "The Oil State", "The Native America State", "The Plains State"],
        correctAnswer: 0,
        explanation: "Oklahoma is known as 'The Sooner State' from settlers who entered the territory 'sooner' than legally allowed."
      },
      {
        question: "What tragic event occurred in Oklahoma City in 1995?",
        options: ["Tornado", "Federal building bombing", "Oil spill", "Earthquake"],
        correctAnswer: 1,
        explanation: "The Oklahoma City bombing on April 19, 1995, was a domestic terrorist attack on the Alfred P. Murrah Federal Building."
      }
    ]
  },
  {
    state: "Pennsylvania",
    questions: [
      {
        question: "What is the capital of Pennsylvania?",
        options: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
        correctAnswer: 2,
        explanation: "Harrisburg has been Pennsylvania's capital since 1812."
      },
      {
        question: "What is Pennsylvania's state nickname?",
        options: ["The Keystone State", "The Quaker State", "Both A and B", "The Liberty State"],
        correctAnswer: 2,
        explanation: "Pennsylvania is known as both 'The Keystone State' and 'The Quaker State'."
      },
      {
        question: "Which historic document was signed in Philadelphia?",
        options: ["Declaration of Independence", "Constitution", "Articles of Confederation", "All of the above"],
        correctAnswer: 3,
        explanation: "Philadelphia was the site of the signing of all these founding documents."
      }
    ]
  },
  {
    state: "Rhode Island",
    questions: [
      {
        question: "What is the capital of Rhode Island?",
        options: ["Newport", "Warwick", "Providence", "Cranston"],
        correctAnswer: 2,
        explanation: "Providence has been Rhode Island's capital since 1900."
      },
      {
        question: "What is Rhode Island's state nickname?",
        options: ["The Ocean State", "The Plantation State", "Little Rhody", "All of the above"],
        correctAnswer: 3,
        explanation: "Rhode Island is known by all these nicknames."
      },
      {
        question: "What distinction does Rhode Island have among U.S. states?",
        options: ["Smallest by area", "Least populous", "Most densely populated", "Youngest state"],
        correctAnswer: 0,
        explanation: "Rhode Island is the smallest U.S. state by land area."
      }
    ]
  },
  {
    state: "South Carolina",
    questions: [
      {
        question: "What is the capital of South Carolina?",
        options: ["Charleston", "Greenville", "Columbia", "Myrtle Beach"],
        correctAnswer: 2,
        explanation: "Columbia has been South Carolina's capital since 1786."
      },
      {
        question: "What is South Carolina's state nickname?",
        options: ["The Palmetto State", "The Rice State", "The Indigo State", "The Lowcountry State"],
        correctAnswer: 0,
        explanation: "South Carolina is known as 'The Palmetto State' for its state tree, the sabal palmetto."
      },
      {
        question: "Where did the Civil War begin?",
        options: ["Fort Sumter", "Fort Moultrie", "Charleston Harbor", "All of the above"],
        correctAnswer: 0,
        explanation: "The Civil War began with the Confederate attack on Fort Sumter in Charleston Harbor."
      }
    ]
  },
  {
    state: "South Dakota",
    questions: [
      {
        question: "What is the capital of South Dakota?",
        options: ["Sioux Falls", "Rapid City", "Pierre", "Aberdeen"],
        correctAnswer: 2,
        explanation: "Pierre has been South Dakota's capital since statehood in 1889."
      },
      {
        question: "What is South Dakota's state nickname?",
        options: ["The Mount Rushmore State", "The Coyote State", "Both A and B", "The Prairie State"],
        correctAnswer: 2,
        explanation: "South Dakota is known as both 'The Mount Rushmore State' and 'The Coyote State'."
      },
      {
        question: "Which presidents are carved into Mount Rushmore?",
        options: ["Washington, Jefferson, Lincoln, Roosevelt", "Washington, Adams, Jefferson, Madison", "Lincoln, Roosevelt, Wilson, Taft", "Washington, Jefferson, Jackson, Lincoln"],
        correctAnswer: 0,
        explanation: "Mount Rushmore features Washington, Jefferson, Lincoln, and Theodore Roosevelt."
      }
    ]
  },
  {
    state: "Tennessee",
    questions: [
      {
        question: "What is the capital of Tennessee?",
        options: ["Memphis", "Knoxville", "Nashville", "Chattanooga"],
        correctAnswer: 2,
        explanation: "Nashville has been Tennessee's capital since 1843."
      },
      {
        question: "What is Tennessee's state nickname?",
        options: ["The Volunteer State", "The Music State", "The Country State", "The River State"],
        correctAnswer: 0,
        explanation: "Tennessee is known as 'The Volunteer State' for its residents' eagerness to serve in military conflicts."
      },
      {
        question: "What type of music is Nashville famous for?",
        options: ["Jazz", "Blues", "Country", "Rock"],
        correctAnswer: 2,
        explanation: "Nashville is known as 'Music City' and is the center of the country music industry."
      }
    ]
  },
  {
    state: "Utah",
    questions: [
      {
        question: "What is the capital of Utah?",
        options: ["Provo", "West Valley City", "Salt Lake City", "Ogden"],
        correctAnswer: 2,
        explanation: "Salt Lake City has been Utah's capital since statehood in 1896."
      },
      {
        question: "What is Utah's state nickname?",
        options: ["The Beehive State", "The Mormon State", "The Desert State", "The Mountain State"],
        correctAnswer: 0,
        explanation: "Utah is known as 'The Beehive State' symbolizing industry and perseverance."
      },
      {
        question: "What natural feature is Utah famous for having many of?",
        options: ["Deserts", "National parks", "Salt lakes", "Ski resorts"],
        correctAnswer: 1,
        explanation: "Utah has five national parks: Arches, Bryce Canyon, Canyonlands, Capitol Reef, and Zion."
      }
    ]
  },
  {
    state: "Vermont",
    questions: [
      {
        question: "What is the capital of Vermont?",
        options: ["Burlington", "Rutland", "Montpelier", "Brattleboro"],
        correctAnswer: 2,
        explanation: "Montpelier has been Vermont's capital since statehood in 1791."
      },
      {
        question: "What is Vermont's state nickname?",
        options: ["The Green Mountain State", "The Maple State", "The Ski State", "The Rural State"],
        correctAnswer: 0,
        explanation: "Vermont is known as 'The Green Mountain State' for its mountain range."
      },
      {
        question: "What is Vermont famous for producing?",
        options: ["Cheese", "Maple syrup", "Both A and B", "Wine"],
        correctAnswer: 2,
        explanation: "Vermont is famous for both its cheese (especially cheddar) and maple syrup production."
      }
    ]
  },
  {
    state: "Virginia",
    questions: [
      {
        question: "What is the capital of Virginia?",
        options: ["Norfolk", "Virginia Beach", "Richmond", "Newport News"],
        correctAnswer: 2,
        explanation: "Richmond has been Virginia's capital since 1780."
      },
      {
        question: "What is Virginia's state nickname?",
        options: ["The Old Dominion", "The Mother of Presidents", "Both A and B", "The Colonial State"],
        correctAnswer: 2,
        explanation: "Virginia is known as both 'The Old Dominion' and 'The Mother of Presidents'."
      },
      {
        question: "How many U.S. presidents were born in Virginia?",
        options: ["6", "8", "10", "12"],
        correctAnswer: 1,
        explanation: "Eight U.S. presidents were born in Virginia, more than any other state."
      }
    ]
  },
  {
    state: "West Virginia",
    questions: [
      {
        question: "What is the capital of West Virginia?",
        options: ["Huntington", "Morgantown", "Charleston", "Parkersburg"],
        correctAnswer: 2,
        explanation: "Charleston has been West Virginia's capital since statehood in 1863."
      },
      {
        question: "What is West Virginia's state nickname?",
        options: ["The Mountain State", "The Coal State", "The Wild and Wonderful State", "Both A and C"],
        correctAnswer: 3,
        explanation: "West Virginia is known as both 'The Mountain State' and uses 'Wild and Wonderful' as its tourism slogan."
      },
      {
        question: "What industry has historically been important to West Virginia?",
        options: ["Coal mining", "Steel production", "Oil drilling", "Lumber"],
        correctAnswer: 0,
        explanation: "Coal mining has been a major industry in West Virginia for over a century."
      }
    ]
  },
  {
    state: "Wisconsin",
    questions: [
      {
        question: "What is the capital of Wisconsin?",
        options: ["Milwaukee", "Green Bay", "Madison", "Kenosha"],
        correctAnswer: 2,
        explanation: "Madison has been Wisconsin's capital since statehood in 1848."
      },
      {
        question: "What is Wisconsin's state nickname?",
        options: ["America's Dairyland", "The Badger State", "Both A and B", "The Cheese State"],
        correctAnswer: 2,
        explanation: "Wisconsin is known as both 'America's Dairyland' and 'The Badger State'."
      },
      {
        question: "What is Wisconsin particularly famous for producing?",
        options: ["Cheese", "Beer", "Both A and B", "Bratwurst"],
        correctAnswer: 2,
        explanation: "Wisconsin is famous for both cheese production and brewing, with many famous breweries."
      }
    ]
  },
  {
    state: "Wyoming",
    questions: [
      {
        question: "What is the capital of Wyoming?",
        options: ["Casper", "Laramie", "Cheyenne", "Jackson"],
        correctAnswer: 2,
        explanation: "Cheyenne has been Wyoming's capital since statehood in 1890."
      },
      {
        question: "What is Wyoming's state nickname?",
        options: ["The Equality State", "The Cowboy State", "Both A and B", "The Big Sky State"],
        correctAnswer: 2,
        explanation: "Wyoming is known as both 'The Equality State' and 'The Cowboy State'."
      },
      {
        question: "What historic first did Wyoming achieve for women?",
        options: ["First female governor", "First to grant women the vote", "First female senator", "All of the above"],
        correctAnswer: 3,
        explanation: "Wyoming was first to grant women voting rights (1869), first female governor, and many other women's firsts."
      }
    ]
  }
];

export function getQuizForState(stateName: string): StateQuiz | undefined {
  return quizData.find(quiz => quiz.state === stateName);
}