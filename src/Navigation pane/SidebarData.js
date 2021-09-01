import React from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import EditIcon from '@material-ui/icons/Edit';
import DescriptionIcon from '@material-ui/icons/Description';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ListIcon from '@material-ui/icons/List';
import DehazeIcon from '@material-ui/icons/Dehaze';

import '../App.css';

export const SidebarData = [
    {
       title: "Upload Input Files",
       icon: <PublishIcon />,
       link: "Upload" ,

    },

    {
        title: "Create Working Set ",
        icon: <NoteAddIcon />,
        link: "CreateWorkingSet", 
 
     },

     {
        title: "Edit Working Set",
        icon: <EditIcon />,
        link: "EditWorkingSet", 
 
     }, 

     {
        title: "Reporting",
        icon: <DescriptionIcon />,
        link: "Reporting",
 
     }, 

     {
        title: "Publish SHARES Upload File",
        icon: <AssignmentTurnedInIcon />,
        link: "PublishSharesUploadFile", 
 
     },
     {
      title: "Manage Files",
      icon: <ListIcon />,
      link: "ManageFiles", 

   },
   {
      title: "Logs/Audit Trail",
      icon: <DehazeIcon />,
      link: "Logs", 

   },

     
];
export default SidebarData