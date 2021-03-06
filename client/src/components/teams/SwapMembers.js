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

const TransferMembersModal = (props) => {
  const { modal, toggle, team, memberToTransfer } = props;
  const { teams } = props.state;
  const [newteam, setNewTeam] = useState();
  const [hidden, setHidden] = useState(true);
  const [selected, setselected] = useState();
  const [selected2, setselected2] = useState();
  const [memberToChange, setMemberToChange] = useState();
  const [hasChoosen, setHasChoosen] = useState(false);
  const [options, setOptions] = useState([]);

  const handleTeamsChange = (selected) => {
    setOptions([]);
    teams.forEach((element) => {
      if (element.id === selected.value) {
        setNewTeam(element);
        setOptions(element.members);
      }
    });
    setHasChoosen(true);
  };

  const handleMemberChange = (selected2) => {
    newteam.members.forEach((element) => {
      if (element.id === selected2.value) {
        setMemberToChange(element);
      }
    });
    setHidden(false);
  };

  const updateMembers = (e) => {
    e.preventDefault();
    props.actions
      .swapMembers(team.id, memberToTransfer.id, newteam.id, memberToChange.id)
      .then(
        swal(
          "SWAP MEMBERS!",
          "Members swap has been successuly executed!",
          "success"
        )
      )
      .catch((err) => {
        swal("Error!", "An error has occured ! please try again..", "error");
        console.log(err);
      });

    team.members.splice(team.members.indexOf(memberToTransfer), 1);
    team.members.push(memberToChange);
    setHasChoosen(false);
    setHidden(true);
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <Form onSubmit={updateMembers}>
        <ModalHeader toggle={toggle}>Transfer member</ModalHeader>
        <ModalBody>
          <Colxx xxs="12">
            <FormGroup>
              <Label for="teamname">Please choose the team</Label>
              <FormGroup>
                <Select
                  className="basic-single"
                  classNamePrefix="select"
                  isLoading={false}
                  isSearchable={true}
                  name="color"
                  options={teams
                    .filter(
                      (element) =>
                        element.id !== team.id &&
                        team.project.id === element.project.id
                    )
                    .map((item, i) => {
                      return {
                        label: item.name,
                        value: item.id,
                        key: i,
                      };
                    })}
                  onChange={handleTeamsChange}
                  value={selected}
                ></Select>
              </FormGroup>
            </FormGroup>

            {hasChoosen && (
              <FormGroup>
                <Label for="teamname">Please choose the memeber</Label>
                <FormGroup>
                  <Select
                    className="basic-single"
                    classNamePrefix="select"
                    isLoading={false}
                    isSearchable={true}
                    name="color"
                    options={options.map((item, i) => {
                      return {
                        label: item.name,
                        value: item.id,
                        key: i,
                      };
                    })}
                    onChange={handleMemberChange}
                    value={selected2}
                  ></Select>
                </FormGroup>
              </FormGroup>
            )}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferMembersModal);
