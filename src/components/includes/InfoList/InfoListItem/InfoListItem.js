import React from 'react';
import './InfoListItem.sass';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import SubmitPopup from '../SubmitPopup/SubmitPopup';
import notyContainer from '../../../hoc/Noty';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    position: 'relative',
  },
  close: {
    opacity: 0.5,
    position: 'absolute',
    top: '15px',
    right: '15px',
    fontSize: '1.2678rem',
    cursor: 'pointer',
    transition: 'transform ease-out 0.2s',
    willChange: 'transform',
    '&:hover': {
      color: theme.palette.secondary.main,
      transform: 'rotate(30deg)',
    },
  },
  edit: {
    opacity: 0.5,
    position: 'absolute',
    top: '15px',
    right: '40px',
    fontSize: '1.2678rem',
    cursor: 'pointer',
    transition: 'transform ease-out 0.2s',
    willChange: 'transform',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  link: {
    color: 'black',
  },
}));

const InfoListItem = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Paper className={classes.root}>
        <Link title="edit record" className={classes.link} to={`/edit/${props.id}`}>
          <EditIcon className={classes.edit}>EditIcon</EditIcon>
        </Link>

        <CloseIcon onClick={props.submit} className={classes.close} />
        {props.showPopup ? (
          <SubmitPopup
            click={action => props.click(action)}
            message="Are you really want to delete this item?"
          />
        ) : (
          ''
        )}

        <h6 title={`id: ${props.id}`} className="item__title">
          {props.title}
        </h6>

        <span className="item__date">modified: {props.date}&nbsp;</span>

        {props.task ? (
          <p className="item__task">
            corresponding task:&nbsp;
            <a
              rel="noopener noreferrer"
              target="_blank"
              title="watch at JIRA"
              href={`https://jira.ourmicroservices.com/browse/${props.task}`}
            >
              {props.task}
            </a>
          </p>
        ) : (
          ''
        )}

        <div className="item__content">{props.content}</div>

        <div className="item__info">
          <div className="item__info-labels">
            <span className={`item__label item__label-${props.status}`}>{props.status}</span>
          </div>
          <div className="item__info-author">{props.author}</div>
        </div>
      </Paper>
    </Grid>
  );
};

export default notyContainer(InfoListItem);
