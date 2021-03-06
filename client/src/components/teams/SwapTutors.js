/* eslint-disable */
import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as teamsAction from "../../redux/actions/teams.actions";
import { Colxx } from "../common/CustomBootstrap";
import Select from "react-select";
import swal from "sweetalert";

import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const SwapTutors = (props) => {
  const { modal, toggle, team, setTeam, tutorToChange } = props;
  const { tutors_involved } = props.teams.selectedTeam.project;
  const [tutor, setTutor] = useState();
  const [hidden, setHidden] = useState(true);
  const [selected, setselected] = useState();

  const handleTutorChange = (selected) => {
    tutors_involved.forEach((element) => {
      if (element.id === selected.value) {
        setTutor(element);
      }
    });
    setHidden(false);
  };

  const isAlreadyATutor = (tutor) => {
    let no = true;
    team.tutors.forEach((exTutor) => {
      if (tutor.id === exTutor.id) no = false;
    });

    return no;
  };

  const updateTutors = (e) => {
    e.preventDefault();
    props.actions
      .changeTutor(team.id, tutorToChange.id, tutor.id)
      .then(
        swal(
          "SWAP TUTORS!",
          "Tutors swap has been successuly executed!",
          "success"
        )
      )
      .catch((err) => {
        swal("Error!", "An error has occured ! please try again..", "error");
        console.log(err);
      });

    team.tutors.splice(team.tutors.indexOf(tutorToChange), 1);
    team.tutors.push(tutor);
    toggle();
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form onSubmit={updateTutors}>
        <ModalHeader toggle={toggle}>Add a tutor</ModalHeader>
        <ModalBody>
          <Colxx xxs="12">
            <FormGroup>
              <Label for="teamname">Please choose the tutor</Label>
              <FormGroup>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isLoading={false}
                  isSearchable={true}
                  name="color"
                  options={tutors_involved
                    .filter((tutor) => isAlreadyATutor(tutor))
                    .map((tutor, i) => {
                      return {
                        label: tutor.name,
                        value: tutor.id,
                        key: i,
                      };
                    })}
                  onChange={handleTutorChange}
                  value={selected}
                ></Select>
              </FormGroup>
            </FormGroup>
          </Colxx>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" disabled={hidden}>
            Confirm
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state, ownProps) => ({ teams: state.teams });

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(teamsAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SwapTutors);
