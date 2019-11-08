import React, { Component } from 'react'
import { Menu, Form, Input } from 'semantic-ui-react'

export default class Navbar extends Component {
	
	state = {
		searchText: ''
	}

	onSearchChange = e => {
		this.setState({ searchText: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.onSearch(this.state.searchText);
		e.currentTarget.reset();
	}

  render() {
    return (
      <div>
				<Menu secondary>
					<Menu.Item header>GIF Search</Menu.Item>
					<Menu.Item position="right">
						<Form onSubmit={this.handleSubmit}>
							<Form.Field>
								<Input 
									onChange={this.onSearchChange}
									name="search"
									className='icon' 
									icon='search' 
									placeholder='Search...' 
								/>
							</Form.Field>
						</Form>
					</Menu.Item>
				</Menu>
			</div>
    )
  }
}