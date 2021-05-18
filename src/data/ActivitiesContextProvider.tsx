import React, { useState } from 'react';
import ActivitiesContext, { Activity, ActivitiesContectModel, ActivityType } from './activities-contexr';

const ActivitiesContextProvider: React.FC = (props) => {

    const [activities,setActivities]= useState<Activity[]>(
        [
        {
            id: Math.random().toString(),
            title: "Aprender ionec",
            description: "Aplicacion",
            hour:"12:22",
            activityType:'hobby',
            imageUrl:'/assents/imagenes/work.jpg',
            isCompleted: false
            


        }
    ]
    );
        

    

const addActivity=(title: string,description:string,hour:string,activityType: ActivityType) => {
    let imageUrl = '';
    switch(activityType) {
        case 'rest':
            imageUrl = '/assets/images/rest.jpg'
            break;
        case 'hobby':
            imageUrl = '/assets/images/hobby.jpg'
            break;
        case 'work':
            imageUrl = '/assets/images/work.jpg'
            break;
        default:
            imageUrl = '/assets/images/work.jpg'
            break;
        };

    const newActivity:Activity={
        id:Math.random().toString(),
        title,
        description,
        hour,
        activityType,
        imageUrl,
        isCompleted: false
    };

    setActivities(currActivities =>{
        return[...currActivities,newActivity];
    });
};
    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
};


const activitiesContext: ActivitiesContectModel = {
    activities,
    addActivity,
    completeActivity
};

return (
    <ActivitiesContext.Provider value={activitiesContext}>
        {props.children}
    </ActivitiesContext.Provider>
);
};

export default ActivitiesContextProvider;