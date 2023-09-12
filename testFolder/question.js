const questionContainer = document.getElementById("questionsBox"); // Replace with your container element

const questions = [
  {
    question: "What is 2 + 2?",
    imgElement: "../media/Untitled.png",
    hasImg: false,
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "how big is yout glizzy",
    imgElement: "../media/Untitled.png",
    hasImg: true,
    answers: [
      { text: "small (sigh)", correct: true },
      { text: "microphobia type", correct: true },
      { text: "average", correct: false },
      { text: "extra tonka", correct: false },
    ],
  },
  /* {
    question: "do you like men?",
    imgElement: "../media/Untitled.png",
    hasImg: false,
    answers: [
      { text: "Kinda", correct: false },
      { text: "YES!!!", correct: true },
      { text: "Um no", correct: false },
      { text: "IDK", correct: false },
    ],
  },

  {
    question:
      "The ____ warns other road users of your intentions to steer to the right or the left, or to turn to the right or left.",
    imgElement: "../media/Untitled.png",
    hasImg: false,
    answers: [
      { text: "5", correct: true },
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "11", correct: false },
    ],
  },
  {
    question: "The ____ control increase the vehicle speed.",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "9", correct: false },
      { text: "10", correct: true },
    ],
  },
  {
    question:
      "Which control helps the driver when engaging or disengaging the gear?",
    answers: [
      { text: "10", correct: false },
      { text: "9", correct: false },
      { text: "8", correct: true },
      { text: "7", correct: false },
    ],
  },
  {
    question:
      "When brakes are applied, the distance it takes to stop your vehicle is, (1) Longer if you carrying a heavy load. (2) Longer on a wet surface than on dry surface. (3) Longer if you are driving at highspeeds.",
    answers: [
      { text: "Only (1) is correct.", correct: false },
      { text: "Only (2) is correct.", correct: false },
      { text: "Only (3) is correct.", correct: false },
      { text: "All of the above are correct.", correct: true },
    ],
  },
  {
    question: "Which control is used to stop the vehicle?  (AN IMAGE IS HERE)",
    answers: [
      { text: "5", correct: false },
      { text: "8", correct: false },
      { text: "9", correct: true },
      { text: "11", correct: false },
    ],
  },
  {
    question: "To change gears, which controls are used?  (AN IMAGE IS HERE)",
    answers: [
      { text: "2 and 8", correct: false },
      { text: "8 and 10", correct: false },
      { text: "8 and 6", correct: true },
      { text: "10 and 7", correct: false },
    ],
  },
  {
    question:
      "Which control is used to make sure your parked vehicle doesn't move?  (AN IMAGE IS HERE)",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
    ],
  },
  {
    question:
      "Which control is used to accelerate your vehicle? (AN IMAGE IS HERE) ",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: false },
      { text: "10", correct: true },
    ],
  },
  {
    question:
      "This command sign informs you that this of the road may be used by? (AN IMAGE IS HERE)",
    answers: [
      { text: "Heavy motor vehicle only.", correct: false },
      { text: "Motors car/Light motor vehicles only.", correct: true },
      { text: "Motorcycles only.", correct: false },
    ],
  },
  {
    question: "What does this road sign forbid?  (AN IMAGE IS HERE)",
    answers: [
      { text: "No parking space in the area for vehicle.", correct: true },
      { text: "You should not drive beyond this sign.", correct: false },
      { text: "Motor vehicle are allowed beyond this sign.", correct: false },
    ],
  },
  {
    question: "The road sign prohibits drivers from?  (AN IMAGE IS HERE)",
    answers: [
      { text: "Driving there between 06:00 and 09:00", correct: true },
      { text: "Stopping at 06:00 to 09:00", correct: false },
      { text: "Speeding from 06:00 to 09:00", correct: false },
    ],
  },
  {
    question: "For the next 500m you are prohibited from?",
    answers: [
      { text: "racing with other vehicles.", correct: false },
      { text: "Driving slow.", correct: false },
      { text: "Overtaking other vehicles.", correct: true },
    ],
  },
  {
    question:
      "Which vehicle type is allowed on this part of the road. (AN IMAGE IS HERE)",
    answers: [
      { text: "Motor cars only.", correct: true },
      { text: "Mini buses only", correct: false },
      { text: "Buses only", correct: false },
    ],
  },
  {
    question: "If another vehicle intends to overtake you, you should ____ .",
    answers: [
      {
        text: "Drive as near to the right edge of the roadway as is possible.",
        correct: false,
      },
      { text: "Engage in hand signals with the other driver.", correct: false },
      {
        text: "Not to accelerate the speed of your vehicle until the other vehicle has passed.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What are these road markings indicating to a driver/rider.  (AN IMAGE IS HERE)",
    answers: [
      {
        text: "Drive to the opposite direction shown by the arrow.",
        correct: false,
      },
      {
        text: "Drive only in the direction indicated by the arrow.",
        correct: true,
      },
      { text: "Procced straight only.", correct: false },
    ],
  },
  {
    question: "You may only drive on the shoulder of the road if ____ .",
    answers: [
      { text: "You want to beat traffic.", correct: false },
      { text: "It's midnight.", correct: false },
      { text: "You have a flat tyre.", correct: true },
    ],
  },
  {
    question:
      "This road sing warns drivers or riders that ____ .  (AN IMAGE IS HERE)",
    answers: [
      {
        text: "One of the lanes of the carriageway is coming to an end.",
        correct: false,
      },
      { text: "The is a freeway ahead.", correct: false },
      {
        text: "The lane will merge with another lane or the roadway will merge soon.",
        correct: true,
      },
    ],
  },
  {
    question:
      "When are you allowed to drive on the shoulder of the road. (1) Between sunset and sunrise. (2) When the public road is clearly discernible at a distance of 150 meters. (3) When you won't destruct traffic or endanger other road users.",
    answers: [
      { text: "Only (1) is correct.", correct: false },
      { text: "Only (2) and (3)are correct.", correct: true },
      { text: "All of the above are correct.", correct: false },
    ],
  },
  {
    question:
      "This road sign gives notice to raod users that ____ .  (AN IMAGE IS HERE)",
    answers: [
      { text: "The road narrows ahead", correct: false },
      {
        text: "The double-lane raod will narrow by a full lane from the left-hand side.",
        correct: false,
      },
      {
        text: "The double-lane road will narrow by a full lane from the right-hand side",
        correct: true,
      },
    ],
  },
  {
    question: "What colour should the indicators emit when their are in use?",
    answers: [
      {
        text: "White, orange or pink light to the front and orange, pink or red light to the rear",
        correct: false,
      },
      {
        text: "White, yellow or amber light to the front and yellow, amber ot red to the rear",
        correct: false,
      },
      {
        text: "White, orange or amber light to the front and orange, amber or red light to the rear",
        correct: true,
      },
    ],
  },
  {
    question: "This road sign is called ____ .",
    answers: [
      { text: "An overhead direction.", correct: true },
      { text: "A fingerboard.", correct: false },
      { text: "A confirmation board.", correct: false },
    ],
  },
  {
    question:
      "A driver of a vehicle or rider of a motorcycle can disobey any road traffic sign or rule of the road if ____ .",
    answers: [
      { text: "Ordered to do so by a traffic officer", correct: true },
      { text: "He/She feels like.", correct: false },
      { text: "The driver is under the infuence of alcohol.", correct: false },
    ],
  },
  {
    question: "This road sign informs road users of what? (AN IMAGE IS HERE)",
    answers: [
      { text: "A temporary construction ahead.", correct: true },
      { text: "loose stones or gravel on the road.", correct: false },
      { text: "A grader is working on the carriageway ahead.", correct: true },
    ],
  },
  {
    question:
      "A cellular or mobile telephone or any other commmunication device should ____ while driving.",
    answers: [
      { text: "Be handled with both hands.", correct: false },
      { text: "Be handled with one hand.", correct: false },
      { text: "Not be handled with either hand.", correct: true },
    ],
  },
  {
    question:
      "What are these markings indicating to a driver/rider. (AN IMAGE IS HERE)*3 ",
    answers: [
      {
        text: "They are indicating an increased in the number of lanes ahead.",
        correct: true,
      },
      { text: "Indicating a sharp turn ahead.", correct: false },
      { text: "You should drive only on the right side.", correct: false },
    ],
  },
  {
    question:
      "A driver/rider of a vehicle on a public road should stop if (1) He/She is in compliance with directions conveyed by a traffic sign. (2) He/She was signalled by a person leading or driving the bovine animals on the road. (3) Animals are seen crossing the road can only move on when all the animals have crossed and the road is safe to continue.",
    answers: [
      { text: "only (1) is correct.", correct: false },
      { text: "Only (3) and (2) are correct.", correct: false },
      { text: "All of the above are correct.", correct: true },
    ],
  },
  {
    question: "This road sign informs you of what? (AN IMAGE IS HERE)",
    answers: [
      { text: "Lanes of the road will merge soon.", correct: false },

      { text: "Lanes of the road will be incresing soon.", correct: true },
      { text: "Lanes of the road will be regulated.", correct: false },
    ],
  },
  {
    question:
      "A driver/rider of a vehicle shall not enter/cross a public road if ____ .",
    answers: [
      { text: "There is obstruction and moving traffic.", correct: true },
      {
        text: "The vehicle can cross the road with obstuctinf or endangering any traffic.",
        correct: false,
      },
      { text: "The road is clear of moving traffic", correct: false },
    ],
  },
  {
    question: "This road sign notifies you of what? (AN IMAGE IS HERE)",
    answers: [
      { text: "The lane ends ahead.", correct: false },
      { text: "Two-way traffic ahead.", correct: true },
      { text: "Two-way traffic crossroad ahead.", correct: false },
    ],
  },
  {
    question:
      "An SABS approved numebr plate(s) shall be affixed to a vehicle ____ .",
    answers: [
      {
        text: "In such a manner that the whole number plate has a dark background.",
        correct: false,
      },
      {
        text: "In such a manner that it is easliy detachable.",
        correct: false,
      },
      {
        text: "In an upright position or within 30 degrees of such position.",
        correct: false,
      },
    ],
  },
  {
    question:
      "This road sign informs a driver/rider of what? (AN IMAGE IS HERE)",
    answers: [
      {
        text: "The freeway will splits ahead and the lanes lead to different destinations as indicated.",
        correct: true,
      },
      { text: "The position of the far-side on-ramp.", correct: false },
      { text: "The position of the near-sid on-ramp.", correct: false },
    ],
  },
  {
    question: "____ is not allowed on a freeway.",
    answers: [
      { text: "A motor vehicle", correct: false },
      { text: "An animal drawn vehicle", correct: true },
      { text: "A motorcycle", correct: false },
    ],
  },
  {
    question: "In which areas can this road sign be found? (AN IMAGE IS HERE)",
    answers: [
      { text: "On any road.", correct: false },
      { text: "In mountainous areas.", correct: true },
      { text: "In the vicinty of farms", correct: false },
    ],
  },
  {
    question: "Which of the following is not allowed on a public road?",
    answers: [
      {
        text: "Give out hand signals for a reason beyond your control.",
        correct: true,
      },
      { text: "Indicate your intention in good time.", correct: false },
      {
        text: "Drag or spin any wheel upon the suface of the roadway, except in the case of an emergency.",
        correct: true,
      },
    ],
  },
  {
    question:
      "How should you react wehn you come across this raod marking on the roadway? (AN IMAGE IS HERE)",
    answers: [
      { text: "Give right of way to other trafiics", correct: false },
      { text: "Look out for predestrians.", correct: false },
      { text: "Follow the correct route in the intersection.", correct: true },
    ],
  },
  {
    question:
      "Within an urban area, you may not leave your vehicle abandon for than ____ .",
    answers: [
      { text: "3 days.", correct: false },
      { text: "7 days", correct: true },
      { text: "4 days", correct: false },
    ],
  },
  {
    question:
      "This road sign warns riders or drivers abou the ____. (AN IMAGE IS HERE)",
    answers: [
      { text: "Lanes of the road increasing soon.", correct: false },
      { text: "Lane split ahead.", correct: false },
      {
        text: "Lane that will merge with another lane or the roadways will join ahead.",
        correct: true,
      },
    ],
  },
  {
    question:
      "____ is the minimum following distance for light motor vehicle and motorcycles.",
    answers: [
      { text: "10 seconds ", correct: false },
      { text: "1 minute", correct: false },
      { text: "2 seconds", correct: true },
    ],
  },
  {
    question:
      "What should be your reaction if you come across this road sign? (AN IMAGE IS HERE)",
    answers: [
      {
        text: "Slow down enough to able to round the curves safely ot stop within the sight distance you can see.",
        correct: true,
      },
      {
        text: "Speea fast enough to able to round the sharp curves.",
        correct: false,
      },
      { text: "Never slow down to take the curves.", correct: false },
    ],
  },
  {
    question: "You may not stop your vehicle ____ .",
    answers: [
      {
        text: "When a traffic officer instructs you to do so.",
        correct: false,
      },
      {
        text: "Whitin 6 meters of any bridge, tunnel or subway.",
        correct: true,
      },
      { text: "If your vehicle brakes are faulty.", correct: false },
    ],
  },
  {
    question:
      "What does this road sign indicate to a driver ot rider. (AN IMAGE IS HERE)",
    answers: [
      { text: "Indicates that the freeway splits ahead", correct: false },
      { text: "ind", correct: false },
      {
        text: "Shows where is crossing the freeway and where the freeway is heading too.",
        correct: true,
      },
    ],
  },
  {
    question:
      "Where on the public road are you not allowed to park your vehicle.",
    answers: [
      { text: "Near a school.", correct: true },
      {
        text: "On the same side as a fire hydrant within 1.5 meters of the fire hydrant.",
        correct: false,
      },
      { text: "Near a tree.", correct: false },
    ],
  },
  {
    question: "This road sign warns you of what? (AN IMAGE IS HERE) ",
    answers: [
      { text: "Road narrows from one side only.", correct: true },
      { text: "Road narrows from both sides", correct: false },
      { text: "Narrows bridge ahead", correct: false },
    ],
  },
  {
    question:
      "If you decide to stop or turn to the left or to the right, you should ____ .",
    answers: [
      { text: "Indicate your intention in good time.", correct: true },
      { text: "Drive by as fast as you can after doing so.", correct: false },
      { text: "Look out for pedestrians.", correct: false },
    ],
  },
  {
    question: "When you lane change you should make sure that ____ .",
    answers: [
      { text: "You change lanes whenever you feel like.", correct: false },
      {
        text: "You do some hand signals to other road users before change lanes.",
        correct: false,
      },
      {
        text: "You shall not turn from one lane into another unless you can do so without obstructing or endangering other traffic.",
        correct: true,
      },
    ],
  },
  {
    question:
      "What action should you take when come across these road markings? (AN IMAGE IS HERE) ",
    answers: [
      { text: "Race other drivers.", correct: false },
      { text: "Drive in the center of your dedicated lane.", correct: true },
      { text: "Overtake other vehicles.", correct: false },
    ],
  },
  {
    question: "This raod sign inform you of an ____ ahead? (AN IMAGE IS HERE) ",
    answers: [
      { text: "Arrestor bed.", correct: true },
      { text: "Old gas station.", correct: false },
      { text: "Oil station.", correct: false },
    ],
  },
  {
    question: "The road sign notifies road users about? (AN IMAGE IS HERE) ",
    answers: [
      { text: "One or more concealed driveways.", correct: false },
      { text: "Two sharp curves ahead in oppsite directions.", correct: false },
      { text: "A series of curves ahead.", correct: true },
    ],
  },
  {
    question: "When driving/riding you should always ____?",
    answers: [
      { text: "Do so at speed of 60km/h.", correct: false },
      { text: "Have a passenger in your vehicle/motorcycle.", correct: false },
      {
        text: "Obey the traffic signs and rules of the road, unless directed otherwise by a traffic officer.",
        correct: true,
      },
    ],
  },
  {
    question:
      "what colour and how many retro-reflectors should be fitted on the rear of a light motor vehicle? ",
    answers: [
      { text: "Two red retro-reflectors", correct: true },
      { text: "Three yello retro-reflectors", correct: false },
      { text: "Two pink retro-reflectors", correct: false },
    ],
  },
  {
    question: "What is 2 + 2?",
    answers: [
      { text: "4", correct: true },
      { text: "22", correct: false },
    ],
  },
  {
    question: "This road sign informs you of what? (AN IMAGE IS HERE)",
    answers: [
      { text: "A cross-route advance directions.", correct: true },
      { text: "An exit sequence.", correct: true },
      { text: "A far-side advance on-ramp direction.", correct: false },
    ],
  },
  {
    question:
      "A speed limit fo ____ should be appy in respect of every public road situated within urban area.",
    answers: [
      { text: "120 kilometers per hour.", correct: false },
      { text: "60 kilometers per hour.", correct: true },
      { text: "100 kilometers per hour.", correct: false },
    ],
  },
  {
    question: "What is the purpose of this road sign? (AN IMAGE IS HERE)",
    answers: [
      { text: "To warn you of a train station ahead.", correct: false },
      { text: "To warn you of a bus station ahead.", correct: false },
      { text: "To warn you of a railway crossing ahead.", correct: true },
    ],
  },
  {
    question:
      "Displaying an emergency warning triangle shall not apply to vehicle being stationary____ .(1) In a place where a road traffic sing authorises the loading or unloading of goods. (2) In compliance of with raod traffic sign or directions given by the traffic officer. (3) In the course of events accompanying the carrying out of a State or municipal function.   ",
    answers: [
      { text: "Only (1) and (2) are correct.", correct: true },
      { text: "Only (3) is correct", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question:
      "This guidance road marking warns you to be on a look out for? (AN IMAGE IS HERE) ",
    answers: [
      { text: "Children ahead", correct: true },
      { text: "Pedestrians ahead", correct: false },
      { text: "Cyclists ahead", correct: true },
    ],
  },
  {
    question:
      "How many windscreen wiper a ligh?heavy motor vehicle should have and when in operation it should wipe the outside  of the windscreen continuoslt evenly and adequately?",
    answers: [
      {
        text: "At least one windscreen wiper should the windscreen directly in front of the driver continously, evenly and adequatly.",
        correct: true,
      },
      {
        text: "Two windscreen wipers should clean the entire windscreen. ",
        correct: false,
      },
      {
        text: "Three winderscreen wipers. Two fitted to the front windscreen and one fitted on the back windscreen of the vehicle. ",
        correct: false,
      },
    ],
  }, */
  {
    question: "The road warns you of what? (AN IMAGE IS HERE)",
    answers: [
      { text: "Winding road ahead", correct: true },
      { text: "Concealed driveway ahead", correct: false },
      { text: "Combined curves ahead", correct: false },
    ],
  },
  {
    question: "When should you use the emergency warning triangle?",
    answers: [
      { text: "when your vehicle has broken down.", correct: true },
      {
        text: "When parked outside a location, on the wrong side of the road facing on coming traffic.",
        correct: false,
      },
      { text: "When you want to take a break from driving.", correct: false },
    ],
  },
  {
    question: "This road sign alerts drivers or riders of a ______ . ",
    hasImg: true,
    imgElement: "../imgForQuestion/blob-transformed-removebg-preview",
    answers: [
      { text: "Hairpin bend to the right ahead", correct: false },
      { text: "Sharp curve to the right ahead", correct: true },
      { text: "Gentle curve to the right ahead", correct: false },
    ],
  },
  {
    question:
      "The driver/rider of a vehicle must yield right of way, slow down or stop , if necessary in order to yield right of way to a ____ . ",
    answers: [
      { text: "Vehicle in a mini-circle", correct: false },
      { text: "Vehicle at an intersection", correct: false },
      {
        text: "Pedestrian crossing a roadway within a pedestrian crossing",
        correct: true,
      },
    ],
    hasImg: false,
  },
  {
    question: "This road sign informs you of what?(AN IMAGE IS HERE) ",
    hasImg: true,
    imgElement: "",
    answers: [
      {
        text: "That you are on your way to the places indicated and that these  destinations are at the distances indicated by the sign.",
        correct: true,
      },
      { text: "Inform you of places you are around.", correct: false },
      { text: "Inform you of a toll gate ahead.", correct: false },
    ],
  },
  {
    question: "The road marking RTM1 below tell the driver?",
    imgElement: "../imgForQuestion/if_vehicle_a",
    hasImg: true,
    answers: [
      {
        text: "If you are in vehicle B(the back vehicle), you can street race vehicle A(the front vehicle) to the stop line.",
        correct: false,
      },
      {
        text: "If you are in vehicle B , you may not slow down with vehicle A, and overtaking is the priority.",
        correct: false,
      },
      {
        text: "If you are in vehicle A, you shoould stop before the line indicated in the Im at RTM1",
        correct: true,
      },
    ],
  },
  {
    question: `The road sign warns you of what?`,
    imgElement: "../imgForQuestion/Motor-gate_question",
    hasImg: true,
    answers: [
      { text: "A motor gate to the left of the road", correct: false },
      { text: "A motor gate to the right of the road", correct: true },
      { text: "A motor gate in the middle of the road", correct: false },
    ],
  },
  {
    question:
      "You may drive on the right hand side of the road if (1) The road is wide enough. (2) When it can be done without obstructing or endangering other traffic. (3) When in compliance with the traffic sign or direction of the traffic officer. ",
    answers: [
      { text: "Only (2) is correct.", correct: false },
      { text: "Only (2) and (3) are correct.", correct: true },
      { text: "All of the above.", correct: false },
    ],
    hasImg: false,
  },
  {
    question: "What is the general rule of the road in the South Africa.",
    hasImg: false,
    answers: [
      {
        text: "You may only get a driver's license at the age of 21.",
        correct: false,
      },
      { text: "Drive at 60km/h.", correct: false },
      { text: "Always drive on the left side of the raod.", correct: true },
    ],
  },
  {
    question:
      "A light/heavy motor vehicle shoud not be used on a public road carrying any goods, which project ____ ",
    answers: [
      {
        text: "More than 1.8 meters to the back end of the vehicle.",
        correct: true,
      },
      { text: "Less than 1.8 millimeters to the left end.", correct: false },
      {
        text: "More than 10 meters to the front end of the vehicle.",
        correct: false,
      },
    ],
    hasImg: false,
  },
  {
    question:
      "The load carried by a light/heavy motor vehicle should never project more than _____ beyond the front end of the vehicle",
    answers: [
      { text: "100 millimeters", correct: false },
      { text: "500 millimeters", correct: false },
      { text: "300 millimeters", correct: true },
    ],
    hasImg: false,
  },
  {
    question: "what is compulsory with respect to a seatbelt",
    answers: [
      {
        text: "It is compulsory to wear a seatbelt while reversing or moving in or out of a parking bay or area",
        correct: false,
      },
      {
        text: "Seatbelts are not compulsory to wear when moving forward",
        correct: false,
      },
      {
        text: "Seatbelts are compulsory to wear moving forward for children and adults but it only covers persons 3 years of age and older",
        correct: true,
      },
    ],
  },
];

questions.forEach((question) => {});
