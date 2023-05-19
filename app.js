import React from 'react';
import { View, Text } from 'react-native';

// JSON data
import jsonData from './data.json';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {jsonData.employees.map((employee) => (
        <View key={employee.id}>
          <Text>Name: {employee.name}</Text>
          <Text>Designation: {employee.designation}</Text>
          <Text>Skills: {employee.skills.join(', ')}</Text>
          {employee.projects && (
            <View>
              <Text>Projects:</Text>
              {employee.projects.map((project) => (
                <View key={project.name}>
                  <Text>Project Name: {project.name}</Text>
                  <Text>Description: {project.description}</Text>
                  {project.team && (
                    <View>
                      <Text>Team:</Text>
                      {project.team.map((member) => (
                        <Text key={member.name}>
                          Name: {member.name ? member.name : 'N/A'}, Role: {member.role}
                        </Text>
                      ))}
                    </View>
                  )}
                  {project.tasks && (
                    <View>
                      <Text>Tasks:</Text>
                      {project.tasks.map((task) => (
                        <Text key={task.id}>
                          Task: {task.name ? task.name : 'N/A'}, Status: {task.status ? task.status : 'N/A'}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
          )}
          <Text>-----------------------------</Text>
        </View>
      ))}
    </View>
  );
};

export default App;
