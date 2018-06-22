export const mockPanels = [
    {
        position: 0,
        panelId: 0,
        title: 'React Native',
        expanded: true,
        snippets: [
            {
                panelId: 0,
                snippetId: 0,
                title: 'RN Asset Upload',
                code: `import React, { Component } from 'react';
class ReactComponent extends Component {
    
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                \`I'm a backtick!\`
            </div>
        );
    }
}
export default ReactComponent`,
                icon: 'ion-logo-javascript',
                language: 'jsx'
            },
            {
                panelId: 0,
                snippetId: 1,
                title: 'Futch Requests',
                code: 
`/* HelloWorld.java
*/

    public class HelloWorld
    {
        public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
                icon: 'ion-logo-javascript',
                language: 'java'
            }
        ]
    },
    {
        position: 1,
        panelId: 1,
        title: 'LightRocket API',
        expanded: true,
        snippets: [
            {
                panelId: 1,
                snippetId: 2,
                title: '/login',
                code: '//This is a comment',
                icon: 'ion-ios-code-working'
            },
            {
                panelId: 1,
                snippetId: 3,
                title: '/send',
                code: '//This is a comment',
                icon: 'ion-ios-code-working'
            },
            {
                panelId: 1,
                snippetId: 4,
                title: '/register',
                code: '//This is a comment',
                icon: 'ion-ios-code-working'
            },
            {
                panelId: 1,
                snippetId: 5,
                title: '/heartbeat',
                code: '//This is a comment',
                icon: 'ion-ios-code-working'
            },
        ]
    },
    {
        position: 3,
        panelId: 2,
        title: 'Flask Python',
        expanded: true,
        snippets: [
            {
                panelId: 2,
                snippetId: 6,
                title: 'General Setup',
                code: `name = raw_input('What is your name?\\n')
print 'Hi, %s.' % name`,
                icon: 'ion-logo-python',
                language: 'python'
            },
        ]
    },
    {
        position: 4,
        panelId: 3,
        title: 'Node JS',
        expanded: true,
        snippets: [
            {
                panelId: 3,
                snippetId: 7,
                title: 'Express setup',
                code: '//This is a comment',
                icon: 'ion-logo-javascript',
                language: 'javascript'
            },
            {
                panelId: 3,
                snippetId: 8,
                title: 'Express middleware',
                code: '//This is a comment',
                icon: 'ion-logo-javascript',
                language: 'javascript'
            },
            {
                panelId: 3,
                snippetId: 9,
                title: 'Express routing',
                code: '//This is a comment',
                icon: 'ion-logo-javascript',
                language: 'javascript'
            },
            {
                panelId: 3,
                snippetId: 10,
                title: 'Sails JS boiler',
                code: '//This is a comment',
                icon: 'ion-logo-javascript',
                language: 'javascript'
            },
            {
                panelId: 3,
                snippetId: 11,
                title: 'Node ImageMagick',
                code: '//This is a comment',
                icon: 'ion-logo-javascript',
                language: 'javascript'
            },
        ]
    }
]