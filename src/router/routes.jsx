import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


const Routes =[
{
    path : "/main/cars",
    content : 'Cars',
    icon: <DirectionsCarIcon/>
},
{
    path : "/main/posts",
    content : 'Posts',
    icon: <MailOutlineIcon/>
},
{
    path : "/main/comments",
    content : 'Comments',
    icon: <CommentsDisabledIcon/>
},
{
    path : "/main/albums",
    content : 'Albums',
    icon: <PhotoAlbumIcon/>
},
{
    path : "/main/photos",
    content : 'Photos',
    icon: <AddPhotoAlternateIcon/>
},
{
    path : "/main/todos",
    content : 'Todos',
    icon: <LowPriorityIcon/>
},
{
    path : "/main/users",
    content : 'Users',
    icon: <AccountBoxIcon/>
},
]

export default Routes
