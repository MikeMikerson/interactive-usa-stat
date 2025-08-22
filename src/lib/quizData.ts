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
  }
];

export function getQuizForState(stateName: string): StateQuiz | undefined {
  return quizData.find(quiz => quiz.state === stateName);
}