import React from "react";
import {
  List,
  Paper,
  Card,
  Typography,
  ListItem,
  CardHeader,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const ListOfComments = (props) => {
  const [comments, setComments] = React.useState([]);

  const deleteComment = (index) => {
    setComments(comments.filter((_, i) => i !== index));
  };

  const paperStyle = {
    width: 420,
    margin: "20px auto",
  };

  return (
    <Paper style={paperStyle}>
      <List>
        <Typography variant="body2" color="text.primary">
          Отзывы:
        </Typography>
        {props.comments.map((item) => {
          return (
            <ListItem
              key={item.createdAt}
              deleteComment={() => props.deleteComment(props)}
            >
              <Card sx={{ width: 400 }}>
                <CardHeader
                  avatar={
                    <AccountCircleIcon fontSize="large" color="primary" />
                  }
                  action={
                    <IconButton>
                      <CloseIcon onClick={() => deleteComment(props.index)} />
                    </IconButton>
                  }
                  title={item.fullName}
                  subheader={item.createdAt}
                />
                <Box paddingX={3}>
                  <Typography variant="body1" color="caption">
                    {item.text}
                  </Typography>
                </Box>
              </Card>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default ListOfComments;
