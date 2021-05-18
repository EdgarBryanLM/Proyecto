import React from 'react';
import AddActivity from '../pages/AddActivity/AddActivity';

export type ActivityType= 'rest' | 'work' | 'hobby';

export interface Activity{
    id: string;
    title: string;
    description: string;
    hour: string;
    activityType: ActivityType;
    imageUrl: string;
    isCompleted: boolean;
}

export interface ActivitiesContectModel{
    activities: Activity[];
    addActivity:  (tile:string,description:string,hour:string,activityType:ActivityType)=>void;
    completeActivity:(activityId: string)=> void;
}

const activitiesContext= React.createContext<ActivitiesContectModel>({
activities:[],
addActivity: () => {},
completeActivity: () => {}

});

export default  activitiesContext;