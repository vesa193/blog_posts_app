import { Divider } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper/Paper';
import Typography from '@mui/material/Typography';
import { PostCardProps } from '../../interfaces/interfaces';

const PostCard = ({ title, body, author, hasButton, handleOnClick }: PostCardProps) => (
    <Paper variant="outlined" sx={{ maxWidth: 'auto' }}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {body}
            </Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
            <Typography variant="body1" sx={{ color: '#777' }}>
                {author}
            </Typography>
        </CardContent>
        {hasButton && (
            <CardActions>
                <Button size="small" color="primary" onClick={handleOnClick}>
                    View Post
                </Button>
            </CardActions>
        )}
    </Paper>
);

export default PostCard;
