const saSECTIONS = [
  {
    id: "A2",
    title: "Spontaneous Vocalizations Directed at Others",
    options: [
      { value: 0, text: "0:  Directs vocalizations to caregiver or examiner in a variety of pragmatic contexts." },
      { value: 1, text: "1:  Directs vocalizations to parent/caregiver or examiner consistently in one pragmatic context." },
      { value: 2, text: "2:  Directs vocalizations to parent/caregiver or examiner inconsistently, in a limited range of contexts." },
      { value: 2, text: "3:  Rarely directs vocalizations to others; vocalizations are largely self-directed or unprompted." }
    ]
  },

 {
   id: "A7",
   title: "  Pointing",
   options: [
    {value: 0, text: "0:  Points with index finger to show visually directed referencing (coordinated gaze to object and person) of distal Objects in at least two activities (e.g., points to bubbles and to balloon)"},
    {value: 1, text: "1:  Uses pointing to reference objects, but without sufficient flexibility or frequency to meet criteria for a rating Of O"},
    {value: 2, text: "2:  Points only when close to or actually touching an Object, without coordinated gaze or vocalization. Does not have to be well-formed index finger point."},
    {value: 2, text: "3:  Does not point as described above."}
  ]
 },

  {
   id: "A8",
   title: "  Gestures",
   options: [
    {value: 0, text: "0:  Spontaneous use of at least two different gestures of any type (descriptive, conventional, emotional, or instrumental, excluding pointing); at least one used more than once"},
    {value: 1, text: "1:  Spontaneous use of descriptive, conventional, instrumental, oremotional gestures, but exaggerated or limited in range and/or contexts (e.g.. only one or used only once each). "},
    {value: 2, text: "2:  No spontaneous use of descriptive, conventional, instrumental, or emotional gestures, OR inappropriate use only (e.g., a child who signs •more- when he wants something to stop)"},
    {value: 0, text: "8:  N/A (e.g„ limited by severe motor difficulties)."}
  ]
 },

   {
   id: "B1",
   title: "  Unusual Eye Contact",
   options: [
    {value: 0, text: "0:  Appropriate gaze with subtle changes meshed with other communication"},
    {value: 2, text: "2:  Uses poorly modulated eye contact to initiate, terminate, or regulate social interaction."}
   ]
 },

   {
   id: "B3",
   title: "  Facial Expressions Directed to Others",
   options: [
    {value: 0, text: "0:  Directs a range of appropriate facial expressions to the examiner and/or parent/caregiver in order to communicate affective or cognitive states."},
    {value: 1, text: "1:  A child who has a limited range of facial expressions, but who directs most of his or her facial expres_sions to another person, may be rated here."},
    {value: 2, text: "2:  Does not direct appropriate facial to others."}
     ]
 },

{
   id: "B4",
   title: "  Integration Of Gaze and Other Behaviors During Social Overtures",
   options: [
    {value: 0, text: "0:  Uses eye contact effectively with words or vocalizations or gestures to communicate social intention."},
    {value: 1, text: "1:  Uses eye contact and other strategies independently Of each other to communicate social intention (i.e., uses both eye contact and vocalization at different times. but does not coordinate them with each other)."},
    {value: 2, text: "2:  Uses either eye contact or other strategies (e.g.. vocalintion, gestures' to communicate social intention."},
    {value: 2, text: "3:  Uses neither eye contact nor other strategies to communicate social intention. OR no social Overtures."}
     ]
 },

 {
   id: "B5",
   title: "  Shared Enjoyment in Interaction",
   options: [
    {value: 0, text: "0:  Shows definite pleasure with the examiner that is appropriate to the context and occurs during more than one activity. Must include pleasure in at least one activity that is not purely physical in nature."},
    {value: 1, text: "1:  Shows some pleasure appropriate to the context during interactions with the examiner. OR shows definite pleasure directed to the examiner during one interaction (may be physical in nature)."},
    {value: 2, text: "2:  Shows little or no expressed pleasure during interaction with the examiner, but shows pleasure in his or her own actions, in interaction with a parent/caregiver, or in noninteractive components Of the A DOS-2 materials or activities."},
    {value: 2, text: "3:  Little or no expressed pleasure during the ADOSO evaluation and little interest in toys."}
     ]
 },

    {
   id: "B9",
   title: "  Showing",
   options: [
    {value: 0, text: "0:  Spontaneously shows toys or Objects during the ADOS-2 evaluation by holding them up or placing them in front of others. and using eye contact With or Without vocalization."},
    {value: 1, text: "1:  Shows toys or Objects in a partial or inconsistent manner (e.g„ holds them up and/or places them in front Ofothers Without coordinated eye contact. looks from an object in his or her hands to another person without clearly orienting it toward that person, or shows objects as described above for a rating Of O on one occasion only)"},
    {value: 2, text: "2:  Does not objects to another person."}
     ]
 },

     {
   id: "B10",
   title: "   Spontaneous Initiation of Joint Attention",
   options: [
    {value: 0, text: "0:  Uses clearly integrated eye contact to direct another person's attention to an object that is out Of reach by looking at the object, then at the examiner or the parent/caregiver, and then back at the object OR by using a three-point gate shiftstarting With the examiner or parent/caregiver. Eye contact may be coordinated with pointing and/or vocalization. One clear example is sufficient for this rating."},
    {value: 1, text: "1:  Partially references an Object that is clearly out of reach in order to direct another person's attention. May spontaneously l00k at and point to the object and/or vocalize, but does not coordinate either of these with looking at another person, OR may l00k at an Object and then 100k at Or point to the examiner or the parent/caregiver, but not look back at the object."},
    {value: 2, text: "2:  No approximation of spontaneous initiation Of joint attention in order to direct another person's attention to an Object that is Out Of reach."}
     ]
 },

 {
   id: "B11",
   title: "  Response to Joint Attention",
   options: [
    {value: 0, text: "0:   Uses the Orientation ofthe examiner's eyes and face alone as a cue to look toward the target. without the need for pointing. The child must follow the examiners gaze and turn his or her face or eyes in the direction of the target after watching the examiner do so; he or she does not actually have to catch sight of the target."},
    {value: 1, text: "1:   Follows the examiner's pointing by looking at or toward the target."},
    {value: 2, text: "2:   Does not follow the examiner's gaze or pointing to orient toward the object, but looks at the target when activated."},
    {value: 2, text: "3:   Does not orient to the object even when the object is activated."}
     ]
 },

 {
   id: "B12",
   title: "  Quality Of Social Overtures",
   options: [
    {value: 0, text: "0:   Effectively uses nonverbal and verbal means to make clear social Overtures to the examiner or the parent/caregiver. The overtures must be appropriate to immediate contexts."},
    {value: 1, text: "1:   Slightly unusual quality Of social Overtures. Assign this rating if overtures are restricted to personal demands or related to Strong interests. but with some attempt to involve the examiner or the parent/caregiver in those interests."},
    {value: 2, text: "2:   Overtures Often lack integration into context AND/OR social quality. Assign this rating if there are some clearly inappropriate overtures. even if there are other overtures."},
    {value: 2, text: "3:   No social overtures ofany kind."}
     ]
 }
];