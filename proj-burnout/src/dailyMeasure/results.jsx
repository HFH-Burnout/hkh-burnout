import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
      super(props);
      this.state = { scroll: false };
    }
    render() {
      return (
        <div>
            Results
            
          {/* <MuiThemeProvider>
            <div>
              <Paper style={style} zDepth={1}>
                <BottomNavigation style={{ backgroundColor: '#221aba' }}>
                  <BottomNavigationItem
                    icon={fileDownload}
                    containerElement={<Link to="/timeline" />}
                  />
                  <BottomNavigationItem
                    icon={nearbyIcon}
                    containerElement={<Link to="/map" />}
                  />
                </BottomNavigation>
              </Paper>
            </div>
          </MuiThemeProvider> */}
        </div>
      );
    }
}

export default Results;
