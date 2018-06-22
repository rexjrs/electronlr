const { Menu, MenuItem, ipcMain } = require('electron');

exports.AppMenu = (mainWindow) => {
    const template = [
        {
            label: 'SnippetRepo',
            submenu: [
                {
                    label: 'Dev Tools',
                    click: () => {
                        mainWindow.webContents.openDevTools();
                    }
                },
                {
                    label: 'Quit',
                    click: () => {
                        app.quit()
                    }
                }
            ]
        },
        {
            label: 'New',
            submenu: [
                {
                    label: 'Snippet',
                    click: () => {
                        mainWindow.webContents.send('new-snippet');
                    }
                },
                {
                    label: 'Folder',
                    click: () => {

                    }
                },
            ]
        }
    ]
    return Menu.buildFromTemplate(template)
}

exports.ContextMenus = (mainWindow) => {
    // Panels
    const ctxMenuPanel = new Menu()
    ctxMenuPanel.append(new MenuItem({
        label: 'Add Snippet'
    }))
    ctxMenuPanel.append(new MenuItem({
        label: 'Rename Folder'
    }))
    ctxMenuPanel.append(new MenuItem({
        label: 'Delete Folder'
    }))
    ipcMain.on('ctx-panel', (event, x, y) => {
        ctxMenuPanel.popup(mainWindow, x, y)
    });
    // Snippets
    const ctxMenuSnippet = new Menu()
    ctxMenuSnippet.append(new MenuItem({
        label: 'Rename Snippet'
    }))
    ctxMenuSnippet.append(new MenuItem({
        label: 'Delete Snippet'
    }))
    ipcMain.on('ctx-snippet', (event, x, y) => {
        ctxMenuSnippet.popup(mainWindow, x, y)
    });
}