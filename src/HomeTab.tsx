import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import TeamsBaseComponent, { ITeamsBaseComponentState } from "msteams-react-base-component";
import * as microsoftTeams from "@microsoft/teams-js";
import GameActionCreator from "./Redux/ActionCreators/GameActionCreator";

export interface IHomeTabState extends ITeamsBaseComponentState {
  entityId?: string;
}

export interface IHomeTabProps {

}

export class HomeTab extends TeamsBaseComponent<IHomeTabProps, IHomeTabState> {

  public async componentWillMount() {
    this.updateTheme(this.getQueryVariable("theme"));


    if (await this.inTeams()) {
      microsoftTeams.initialize();
      microsoftTeams.registerOnThemeChangeHandler(this.updateTheme);
      microsoftTeams.getContext((context) => {
        microsoftTeams.appInitialization.notifySuccess();
        this.setState({
          entityId: context.entityId
        });
        this.updateTheme(context.theme);
      });
    } else {
      this.setState({
        entityId: "This is not hosted in Microsoft Teams"
      });
    }
  }

  public componentDidMount(){
    microsoftTeams.getContext((context) => GameActionCreator.initialise(context))
  }

  /**
   * The render() method to create the UI of the tab
   */
  public render() {
    return (
      <Provider theme={this.state.theme}>
        <Flex fill={true} column styles={{
          padding: ".8rem 0 .8rem .5rem"
        }}>
          <Flex.Item>
            <Header content="This is your tab" />
          </Flex.Item>
          <Flex.Item>
            <div>

              <div>
                <Text content={this.state.entityId} />
              </div>

              <div>
                <Button onClick={() => alert("It worked!")}>A sample button</Button>
              </div>
            </div>
          </Flex.Item>
          <Flex.Item styles={{
            padding: ".8rem 0 .8rem .5rem"
          }}>
            <Text size="smaller" content="(C) Copyright Avengers" />
          </Flex.Item>
        </Flex>
      </Provider>
    );
  }
}
