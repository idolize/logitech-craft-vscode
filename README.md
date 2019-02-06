# Logitech Craft VS Code plugin

Allows you to control ANY part of your VS Code editor using the Logitech Craft keyboard crown!

Contains a VS Code extension you can install as well as a Logitech Options plugin.

## Requirements

- Logitech Craft Keyboard
- Logitech Options software
- Visual Studio Code

## Customization

You can customize what VS Code commands are run for various Craft Crown events. To do this, just [open your VS Code user settings](https://code.visualstudio.com/docs/getstarted/settings) and look under "Extensions" -> "Logitech Craft keyboard".

You can trigger any available VSCode command from these settings. **To find the command you want to use you should do the following**:

1. Open Visual Studio Code
1. Open the Command Palette (Cmd+Shift+P on Mac, Ctrl+Shirt+P on Windows)
1. Type "Preferences: Open Keyboard Shortcuts"
1. Use the top search bar to look through all available commands
1. Once you find the command you want, note the string listed under the name
1. Type this string into the VSCode extension setting ("Extensions" -> "Logitech Craft keyboard") for the event you want

Here is a list of some of the available commands (NOTE: this list may be out of date or different on your version of VSCode! To get a more accurate list please follow the steps above):

```
setContext
columnSelect
cursorColumnSelectLeft
cursorColumnSelectRight
cursorColumnSelectUp
cursorColumnSelectPageUp
cursorColumnSelectDown
cursorColumnSelectPageDown
cursorMove
cursorLeft
cursorLeftSelect
cursorRight
cursorRightSelect
cursorUp
cursorUpSelect
cursorPageUp
cursorPageUpSelect
cursorDown
cursorDownSelect
cursorPageDown
cursorPageDownSelect
createCursor
cursorHome
cursorHomeSelect
cursorLineStart
cursorEnd
cursorEndSelect
cursorLineEnd
cursorTop
cursorTopSelect
cursorBottom
cursorBottomSelect
editorScroll
scrollLineUp
scrollPageUp
scrollLineDown
scrollPageDown
lastCursorWordSelect
lastCursorLineSelect
lastCursorLineSelectDrag
expandLineSelection
cancelSelection
removeSecondaryCursors
revealLine
selectAll
setSelection
lineBreakInsert
outdent
tab
deleteLeft
deleteRight
editor.action.selectAll
undo
default:undo
redo
default:redo
default:type
type
default:replacePreviousChar
replacePreviousChar
default:compositionStart
compositionStart
default:compositionEnd
compositionEnd
default:paste
paste
default:cut
cut
editor.action.moveCarretLeftAction
editor.action.moveCarretRightAction
editor.action.transposeLetters
editor.action.clipboardCutAction
editor.action.clipboardCopyAction
editor.action.clipboardPasteAction
editor.action.clipboardCopyWithSyntaxHighlightingAction
editor.action.commentLine
editor.action.addCommentLine
editor.action.removeCommentLine
editor.action.blockComment
editor.action.showContextMenu
cursorUndo
editor.unfold
editor.unfoldRecursively
editor.fold
editor.foldRecursively
editor.foldAll
editor.unfoldAll
editor.foldAllBlockComments
editor.foldAllMarkerRegions
editor.unfoldAllMarkerRegions
editor.foldLevel1
editor.foldLevel2
editor.foldLevel3
editor.foldLevel4
editor.foldLevel5
editor.foldLevel6
editor.foldLevel7
editor.action.fontZoomIn
editor.action.fontZoomOut
editor.action.fontZoomReset
editor.action.formatDocument
editor.action.formatSelection
editor.action.format
editor.action.indentationToSpaces
editor.action.indentationToTabs
editor.action.indentUsingTabs
editor.action.indentUsingSpaces
editor.action.detectIndentation
editor.action.reindentlines
editor.action.reindentselectedlines
editor.action.copyLinesUpAction
editor.action.copyLinesDownAction
editor.action.moveLinesUpAction
editor.action.moveLinesDownAction
editor.action.sortLinesAscending
editor.action.sortLinesDescending
editor.action.trimTrailingWhitespace
editor.action.deleteLines
editor.action.indentLines
editor.action.outdentLines
editor.action.insertLineBefore
editor.action.insertLineAfter
deleteAllLeft
deleteAllRight
editor.action.joinLines
editor.action.transpose
editor.action.transformToUppercase
editor.action.transformToLowercase
editor.action.smartSelect.grow
editor.action.smartSelect.shrink
editor.action.toggleTabFocusMode
cursorWordStartLeft
cursorWordEndLeft
cursorWordLeft
cursorWordStartLeftSelect
cursorWordEndLeftSelect
cursorWordLeftSelect
cursorWordStartRight
cursorWordEndRight
cursorWordRight
cursorWordStartRightSelect
cursorWordEndRightSelect
cursorWordRightSelect
deleteWordStartLeft
deleteWordEndLeft
deleteWordLeft
deleteWordStartRight
deleteWordEndRight
deleteWordRight
cursorWordPartStartLeft
cursorWordPartStartLeftSelect
deleteWordPartLeft
deleteWordPartRight
cursorWordPartLeft
cursorWordPartLeftSelect
cursorWordPartRight
cursorWordPartRightSelect
editor.action.diffReview.next
editor.action.diffReview.prev
editor.action.selectToBracket
editor.action.jumpToBracket
editor.action.marker.next
editor.action.marker.prev
editor.action.marker.nextInFiles
editor.action.marker.prevInFiles
closeMarkersNavigation
editor.action.showHover
editor.action.inPlaceReplace.up
editor.action.inPlaceReplace.down
editor.action.openLink
leaveEditorMessage
editor.action.quickFix
editor.action.refactor
editor.action.sourceAction
editor.action.organizeImports
editor.action.codeAction
editor.action.triggerParameterHints
closeParameterHints
showPrevParameterHint
showNextParameterHint
editor.action.rename
acceptRenameInput
cancelRenameInput
jumpToNextSnippetPlaceholder
jumpToPrevSnippetPlaceholder
leaveSnippet
acceptSnippet
editor.action.triggerSuggest
acceptSelectedSuggestion
acceptSelectedSuggestionOnEnter
hideSuggestWidget
selectNextSuggestion
selectNextPageSuggestion
selectLastSuggestion
selectPrevSuggestion
selectPrevPageSuggestion
selectFirstSuggestion
toggleSuggestionDetails
toggleSuggestionFocus
insertBestCompletion
insertNextSuggestion
insertPrevSuggestion
editor.action.wordHighlight.next
editor.action.wordHighlight.prev
editor.action.wordHighlight.trigger
history.showPrevious
history.showNext
actions.find
actions.findWithSelection
editor.action.nextMatchFindAction
editor.action.previousMatchFindAction
editor.action.nextSelectionMatchFindAction
editor.action.previousSelectionMatchFindAction
editor.action.startFindReplaceAction
closeFindWidget
toggleFindCaseSensitive
toggleFindWholeWord
toggleFindRegex
toggleFindInSelection
editor.action.replaceOne
editor.action.replaceAll
editor.action.selectAllMatches
editor.action.insertCursorAbove
editor.action.insertCursorBelow
editor.action.insertCursorAtEndOfEachLineSelected
editor.action.addSelectionToNextFindMatch
editor.action.addSelectionToPreviousFindMatch
editor.action.moveSelectionToNextFindMatch
editor.action.moveSelectionToPreviousFindMatch
editor.action.selectHighlights
editor.action.changeAll
editor.action.addCursorsToBottom
editor.action.addCursorsToTop
editor.action.goToDeclaration
editor.action.revealDefinition
editor.action.openDeclarationToTheSide
editor.action.revealDefinitionAside
editor.action.previewDeclaration
editor.action.peekDefinition
editor.action.revealDeclaration
editor.action.peekDeclaration
editor.action.goToImplementation
editor.action.peekImplementation
editor.action.goToTypeDefinition
editor.action.peekTypeDefinition
editor.action.referenceSearch.trigger
editor.action.findReferences
editor.action.showReferences
goToNextReference
goToNextReferenceFromEmbeddedEditor
goToPreviousReference
goToPreviousReferenceFromEmbeddedEditor
closeReferenceSearch
closeReferenceSearchEditor
openReferenceToSide
workbench.action.quickOpen
workbench.action.quickOpenPreviousEditor
workbench.action.toggleTabsVisibility
editor.action.showAccessibilityHelp
closeAccessibilityHelp
editor.action.toggleMinimap
workbench.action.toggleMultiCursorModifier
editor.action.toggleRenderControlCharacter
editor.action.toggleRenderWhitespace
editor.action.toggleWordWrap
workbench.action.showEmmetCommands
dev.stats.loader
workbench.action.url.openUrl
workbench.action.showCommands
workbench.action.toggleEditorGroupLayout
editor.action.defineKeybinding
workbench.action.toggleActivityBarVisibility
workbench.action.toggleCenteredLayout
workbench.action.toggleSidebarPosition
workbench.action.toggleSidebarVisibility
workbench.action.toggleStatusbarVisibility
workbench.action.toggleZenMode
workbench.action.quickPickManyToggle
workbench.action.quickInputBack
workbench.action.showInterfaceOverview
workbench.action.hideInterfaceOverview
editor.action.dirtydiff.previous
editor.action.dirtydiff.next
workbench.action.editor.previousChange
workbench.action.editor.nextChange
closeDirtyDiff
editor.emmet.action.expandAbbreviation
workbench.action.closeQuickOpen
workbench.action.acceptSelectedQuickOpenItem
workbench.action.focusQuickOpen
workbench.action.quickOpenSelectNext
workbench.action.quickOpenSelectPrevious
workbench.action.quickOpenNavigateNext
workbench.action.quickOpenNavigatePrevious
workbench.action.removeFromEditorHistory
workbench.action.quickOpenNavigateNextInFilePicker
workbench.action.quickOpenNavigatePreviousInFilePicker
workbench.action.showInteractivePlayground
workbench.action.interactivePlayground.arrowUp
workbench.action.interactivePlayground.arrowDown
workbench.action.interactivePlayground.pageUp
workbench.action.interactivePlayground.pageDown
editor.action.inspectTMScopes
breadcrumbs.toggle
breadcrumbs.focusAndSelect
breadcrumbs.focus
breadcrumbs.toggleToOn
breadcrumbs.focusNext
breadcrumbs.focusPrevious
breadcrumbs.selectFocused
breadcrumbs.revealFocused
breadcrumbs.selectEditor
breadcrumbs.revealFocusedFromTreeAside
workbench.action.editor.changeLanguageMode
workbench.action.editor.changeEOL
workbench.action.editor.changeEncoding
workbench.action.nextEditorInGroup
workbench.action.previousEditorInGroup
workbench.action.lastEditorInGroup
workbench.action.firstEditorInGroup
workbench.action.openNextRecentlyUsedEditor
workbench.action.openPreviousRecentlyUsedEditor
workbench.action.showAllEditors
workbench.action.showEditorsInActiveGroup
workbench.action.nextEditor
workbench.action.previousEditor
workbench.action.reopenClosedEditor
workbench.action.clearRecentFiles
workbench.action.closeAllEditors
workbench.action.closeAllGroups
workbench.action.closeEditorsToTheLeft
workbench.action.closeEditorsInOtherGroups
workbench.action.closeEditorInAllGroups
workbench.action.splitEditor
workbench.action.splitEditorOrthogonal
workbench.action.splitEditorLeft
workbench.action.splitEditorRight
workbench.action.splitEditorUp
workbench.action.splitEditorDown
workbench.action.joinTwoGroups
workbench.action.joinAllGroups
workbench.action.navigateEditorGroups
workbench.action.evenEditorWidths
workbench.action.maximizeEditor
workbench.action.minimizeOtherEditors
workbench.action.moveEditorLeftInGroup
workbench.action.moveEditorRightInGroup
workbench.action.moveActiveEditorGroupLeft
workbench.action.moveActiveEditorGroupRight
workbench.action.moveActiveEditorGroupUp
workbench.action.moveActiveEditorGroupDown
workbench.action.moveEditorToPreviousGroup
workbench.action.moveEditorToNextGroup
workbench.action.moveEditorToFirstGroup
workbench.action.moveEditorToLastGroup
workbench.action.moveEditorToLeftGroup
workbench.action.moveEditorToRightGroup
workbench.action.moveEditorToAboveGroup
workbench.action.moveEditorToBelowGroup
workbench.action.focusActiveEditorGroup
workbench.action.focusFirstEditorGroup
workbench.action.focusLastEditorGroup
workbench.action.focusPreviousGroup
workbench.action.focusNextGroup
workbench.action.focusLeftGroup
workbench.action.focusRightGroup
workbench.action.focusAboveGroup
workbench.action.focusBelowGroup
workbench.action.newGroupLeft
workbench.action.newGroupRight
workbench.action.newGroupAbove
workbench.action.newGroupBelow
workbench.action.navigateForward
workbench.action.navigateBack
workbench.action.navigateToLastEditLocation
workbench.action.navigateLast
workbench.action.openPreviousEditorFromHistory
workbench.action.clearEditorHistory
workbench.action.revertAndCloseActiveEditor
workbench.action.editorLayoutSingle
workbench.action.editorLayoutTwoColumns
workbench.action.editorLayoutThreeColumns
workbench.action.editorLayoutTwoRows
workbench.action.editorLayoutThreeRows
workbench.action.editorLayoutTwoByTwoGrid
workbench.action.editorLayoutTwoRowsRight
workbench.action.editorLayoutTwoColumnsBottom
workbench.action.openNextRecentlyUsedEditorInGroup
workbench.action.openPreviousRecentlyUsedEditorInGroup
workbench.action.quickOpenNavigateNextInEditorPicker
workbench.action.quickOpenNavigatePreviousInEditorPicker
moveActiveEditor
layoutEditorGroups
workbench.action.compareEditor.nextChange
workbench.action.compareEditor.previousChange
toggle.diff.renderSideBySide
toggle.diff.ignoreTrimWhitespace
workbench.action.openEditorAtIndex
workbench.action.openEditorAtIndex1
workbench.action.openEditorAtIndex2
workbench.action.openEditorAtIndex3
workbench.action.openEditorAtIndex4
workbench.action.openEditorAtIndex5
workbench.action.openEditorAtIndex6
workbench.action.openEditorAtIndex7
workbench.action.openEditorAtIndex8
workbench.action.openEditorAtIndex9
workbench.action.closeUnmodifiedEditors
workbench.action.closeEditorsInGroup
workbench.action.closeActiveEditor
workbench.action.closeGroup
workbench.action.closeOtherEditors
workbench.action.closeEditorsToTheRight
workbench.action.keepEditor
workbench.action.showEditorsInGroup
workbench.action.closeEditorsAndGroup
workbench.action.focusSecondEditorGroup
workbench.action.focusThirdEditorGroup
workbench.action.focusFourthEditorGroup
workbench.action.focusFifthEditorGroup
workbench.action.focusSixthEditorGroup
workbench.action.focusSeventhEditorGroup
workbench.action.focusEighthEditorGroup
workbench.action.togglePanel
workbench.action.focusPanel
workbench.action.toggleMaximizedPanel
workbench.action.closePanel
workbench.action.togglePanelPosition
workbench.action.previousPanelView
workbench.action.nextPanelView
workbench.action.previousSideBarView
workbench.action.nextSideBarView
workbench.action.configureLocale
workbench.action.clearCommandHistory
workbench.action.gotoLine
workbench.action.gotoSymbol
workbench.action.openView
workbench.action.quickOpenView
workbench.action.quickOpenNavigateNextInViewPicker
workbench.action.quickOpenNavigatePreviousInViewPicker
workbench.view.scm
scm.acceptInput
workbench.action.selectTheme
workbench.action.selectIconTheme
workbench.action.generateColorTheme
workbench.action.focusSideBar
editor.debug.action.toggleBreakpoint
editor.debug.action.conditionalBreakpoint
editor.debug.action.toggleLogPoint
editor.debug.action.runToCursor
editor.debug.action.selectionToRepl
editor.debug.action.selectionToWatch
editor.debug.action.showDebugHover
editor.debug.action.goToNextBreakpoint
editor.debug.action.goToPreviousBreakpoint
workbench.action.files.openFileFolderInNewWindow
workbench.action.files.openFolderInNewWindow
workbench.action.files.openFileInNewWindow
workbench.action.openWorkspaceInNewWindow
addRootFolder
workbench.action.files.revert
explorer.openToSide
workbench.files.action.compareWithSaved
selectForCompare
compareSelected
compareFiles
revealFileInOS
workbench.action.files.revealActiveFileInWindows
copyFilePath
copyRelativeFilePath
workbench.action.files.copyPathOfActiveFile
revealInExplorer
workbench.action.files.saveAs
workbench.action.files.save
workbench.action.files.saveWithoutFormatting
saveAll
workbench.files.action.saveAllInGroup
workbench.action.files.saveFiles
removeRootFolder
explorer.newFile
explorer.newFolder
workbench.action.files.saveAll
workbench.files.action.compareFileWith
workbench.files.action.focusFilesExplorer
workbench.files.action.showActiveFileInExplorer
workbench.files.action.collapseExplorerFolders
workbench.files.action.refreshFilesExplorer
workbench.action.files.newUntitledFile
workbench.action.files.showOpenedFileInNewWindow
workbench.files.action.compareWithClipboard
workbench.action.toggleAutoSave
renameFile
moveFileToTrash
deleteFile
filesExplorer.copy
filesExplorer.paste
workbench.files.action.acceptLocalChanges
workbench.files.action.revertLocalChanges
workbench.action.output.toggleOutput
workbench.output.action.clearOutput
workbench.action.showLogs
workbench.action.openLogFile
editor.action.clearoutput
workbench.action.openActiveLogOutputFile
workbench.action.appPerf
workbench.action.installCommandLine
workbench.action.uninstallCommandLine
openInTerminal
workbench.action.terminal.openNativeConsole
workbench.action.openSnippets
editor.action.insertSnippet
editor.action.showSnippets
editor.action.webvieweditor.showFind
editor.action.webvieweditor.hideFind
editor.action.webvieweditor.selectAll
workbench.action.webview.openDeveloperTools
workbench.action.webview.reloadWebviewAction
insertSnippet
outline.focusDownHighlighted
outline.focusUpHighlighted
workbench.view.explorer
search.action.replaceAll
workbench.action.search.toggleQueryDetails
search.action.focusSearchFromResults
search.action.openResultToSide
search.action.cancel
search.action.remove
search.action.replace
search.action.replaceAllInFile
search.action.replaceAllInFolder
closeReplaceInFilesWidget
search.focus.nextInputBox
search.focus.previousInputBox
search.action.copyMatch
search.action.copyPath
search.action.copyAll
search.action.clearHistory
search.action.toggleSearchViewPosition
search.action.focusSearchList
filesExplorer.findInFolder
search.action.clearSearchResults
search.action.refreshSearchResults
filesExplorer.findInWorkspace
workbench.view.search
workbench.action.findInFiles
search.action.focusNextSearchResult
search.action.focusPreviousSearchResult
workbench.action.replaceInFiles
toggleSearchCaseSensitive
toggleSearchWholeWord
toggleSearchRegex
search.action.collapseSearchResults
workbench.action.showAllSymbols
breakpointWidget.action.acceptInput
closeBreakpointWidget
problems.action.openToSide
workbench.action.showErrorsWarnings
workbench.actions.view.problems
workbench.action.problems.focus
problems.action.copy
problems.action.copyMessage
problems.action.copyRelatedInformationMessage
problems.action.focusProblemsFromFilter
problems.action.focusFilter
list.focusDown
list.expandSelectionDown
list.focusUp
list.expandSelectionUp
list.collapse
list.expand
list.focusPageUp
list.focusPageDown
list.focusFirst
list.focusFirstChild
list.focusLast
list.focusLastChild
list.select
list.selectAll
list.toggleExpand
list.clear
workbench.action.closeWindow
workbench.action.exitZenMode
workbench.action.quit
workbench.action.newWindow
workbench.action.switchWindow
workbench.action.quickSwitchWindow
workbench.action.quickOpenRecent
workbench.action.files.openFileFolder
workbench.action.closeFolder
workbench.action.openIssueReporter
workbench.action.reportPerformanceIssueUsingReporter
workbench.action.keybindingsReference
workbench.action.openDocumentationUrl
workbench.action.openIntroductoryVideosUrl
workbench.action.openTipsAndTricksUrl
workbench.action.openTwitterUrl
workbench.action.openRequestFeatureUrl
workbench.action.openLicenseUrl
workbench.action.openPrivacyStatementUrl
workbench.action.showAboutDialog
workbench.action.zoomIn
workbench.action.zoomOut
workbench.action.zoomReset
workbench.action.toggleFullScreen
workbench.action.navigateUp
workbench.action.navigateDown
workbench.action.navigateLeft
workbench.action.navigateRight
workbench.action.increaseViewSize
workbench.action.decreaseViewSize
workbench.action.addRootFolder
workbench.action.removeRootFolder
workbench.action.openWorkspace
workbench.action.saveWorkspaceAs
workbench.action.duplicateWorkspaceInNewWindow
workbench.action.openWorkspaceConfigFile
workbench.action.toggleSharedProcess
workbench.action.inspectContextKeys
workbench.action.openProcessExplorer
workbench.action.quickOpenNavigateNextInRecentFilesPicker
workbench.action.quickOpenNavigatePreviousInRecentFilesPicker
repl.action.acceptInput
repl.action.copyAll
repl.action.acceptSuggestion
workbench.debug.action.toggleRepl
workbench.view.debug
workbench.action.debug.start
workbench.action.debug.stepOver
workbench.action.debug.stepInto
workbench.action.debug.stepOut
workbench.action.debug.restart
workbench.action.debug.stop
workbench.action.debug.disconnect
workbench.action.debug.continue
workbench.action.debug.pause
workbench.action.debug.terminateThread
workbench.action.debug.configure
workbench.debug.viewlet.action.addFunctionBreakpointAction
workbench.debug.viewlet.action.reapplyBreakpointsAction
workbench.action.debug.run
workbench.debug.viewlet.action.removeAllBreakpoints
workbench.debug.viewlet.action.enableAllBreakpoints
workbench.debug.viewlet.action.disableAllBreakpoints
workbench.debug.action.focusRepl
workbench.action.debug.selectandstart
workbench.debug.panel.action.clearReplAction
debug.toggleBreakpoint
debug.enableOrDisableBreakpoint
debug.renameWatchExpression
debug.setVariable
debug.removeWatchExpression
debug.removeBreakpoint
debug.installAdditionalDebuggers
debug.addConfiguration
editor.debug.action.toggleInlineBreakpoint
debug.openBreakpointToSide
workbench.extensions.action.showExtensionsForLanguage
workbench.extensions.action.showExtensionsWithIds
vscode.previewHtml
vscode.openFolder
vscode.diff
vscode.open
vscode.removeFromRecentlyOpened
vscode.setEditorLayout
editor.action.nextCommentThreadAction
closeReviewPanel
workbench.action.quickOpenNavigateNextInTerminalPicker
workbench.action.quickOpenNavigatePreviousInTerminalPicker
workbench.action.quickOpenTerm
workbench.action.terminal.kill
workbench.action.terminal.copySelection
workbench.action.terminal.new
workbench.action.terminal.clearSelection
workbench.action.terminal.newInActiveWorkspace
workbench.action.terminal.focus
workbench.action.terminal.focusNext
workbench.action.terminal.focusPrevious
workbench.action.terminal.paste
workbench.action.terminal.selectAll
workbench.action.terminal.runSelectedText
workbench.action.terminal.runActiveFile
workbench.action.terminal.toggleTerminal
workbench.action.terminal.scrollDown
workbench.action.terminal.scrollDownPage
workbench.action.terminal.scrollToBottom
workbench.action.terminal.scrollUp
workbench.action.terminal.scrollUpPage
workbench.action.terminal.scrollToTop
workbench.action.terminal.clear
workbench.action.terminal.allowWorkspaceShell
workbench.action.terminal.disallowWorkspaceShell
workbench.action.terminal.rename
workbench.action.terminal.focusFindWidget
workbench.action.terminal.hideFindWidget
workbench.action.terminal.deleteWordLeft
workbench.action.terminal.deleteWordRight
workbench.action.terminal.deleteToLineStart
workbench.action.terminal.moveToLineStart
workbench.action.terminal.moveToLineEnd
workbench.action.terminal.split
workbench.action.terminal.splitInActiveWorkspace
workbench.action.terminal.focusPreviousPane
workbench.action.terminal.focusNextPane
workbench.action.terminal.resizePaneLeft
workbench.action.terminal.resizePaneRight
workbench.action.terminal.resizePaneUp
workbench.action.terminal.resizePaneDown
workbench.action.terminal.scrollToPreviousCommand
workbench.action.terminal.scrollToNextCommand
workbench.action.terminal.selectToPreviousCommand
workbench.action.terminal.selectToNextCommand
workbench.action.terminal.selectToPreviousLine
workbench.action.terminal.selectToNextLine
toggleEscapeSequenceLogging
workbench.action.terminal.toggleFindRegex
workbench.action.terminal.toggleFindRegexTerminalFocus
workbench.action.terminal.toggleFindWholeWord
workbench.action.terminal.toggleFindWholeWordTerminalFocus
workbench.action.terminal.toggleFindCaseSensitive
workbench.action.terminal.toggleFindCaseSensitiveTerminalFocus
workbench.action.terminal.findNextTerminalFocus
workbench.action.terminal.findNext
workbench.action.terminal.findPreviousTerminalFocus
workbench.action.terminal.findPrevious
workbench.action.terminal.sendSequence
workbench.action.terminal.focusAtIndex1
workbench.action.terminal.focusAtIndex2
workbench.action.terminal.focusAtIndex3
workbench.action.terminal.focusAtIndex4
workbench.action.terminal.focusAtIndex5
workbench.action.terminal.focusAtIndex6
workbench.action.terminal.focusAtIndex7
workbench.action.terminal.focusAtIndex8
workbench.action.terminal.focusAtIndex9
workbench.action.tasks.allowAutomaticRunning
workbench.action.tasks.disallowAutomaticRunning
workbench.action.inspectKeyMappings
workbench.action.showWelcomePage
workbench.action.openRawDefaultSettings
workbench.action.openSettings
workbench.action.openSettingsJson
workbench.action.openSettings2
workbench.action.openGlobalSettings
workbench.action.openGlobalKeybindings
workbench.action.openDefaultKeybindingsFile
workbench.action.openGlobalKeybindingsFile
workbench.action.configureLanguageBasedSettings
keybindings.editor.defineKeybinding
keybindings.editor.removeKeybinding
keybindings.editor.resetKeybinding
keybindings.editor.searchKeybindings
keybindings.editor.recordSearchKeys
keybindings.editor.toggleSortByPrecedence
keybindings.editor.showConflicts
keybindings.editor.copyKeybindingEntry
keybindings.editor.copyCommandKeybindingEntry
keybindings.editor.focusKeybindings
workbench.action.openFolderSettings
workbench.action.openWorkspaceSettings
keybindings.editor.clearSearchResults
keybindings.editor.showDefaultKeybindings
keybindings.editor.showUserKeybindings
settings.action.search
settings.action.clearSearchResults
settings.action.focusSettingsFile
settings.action.focusSettingsFromSearch
settings.action.focusNextSetting
settings.action.focusPreviousSetting
settings.action.editFocusedSetting
settings.action.focusSettingsList
settings.action.showContextMenu
settings.switchToJSON
settings.filterByModified
settings.filterByOnline
editor.action.extensioneditor.showfind
workbench.view.extensions
workbench.extensions.action.installExtensions
workbench.extensions.action.listOutdatedExtensions
workbench.extensions.action.showRecommendedExtensions
workbench.extensions.action.showRecommendedKeymapExtensions
workbench.extensions.action.showLanguageExtensions
workbench.extensions.action.showAzureExtensions
workbench.extensions.action.showPopularExtensions
workbench.extensions.action.showEnabledExtensions
workbench.extensions.action.showInstalledExtensions
workbench.extensions.action.showDisabledExtensions
workbench.extensions.action.listBuiltInExtensions
workbench.extensions.action.updateAllExtensions
workbench.extensions.action.openExtensionsFolder
workbench.extensions.action.installVSIX
workbench.extensions.action.disableAll
workbench.extensions.action.disableAllWorkspace
workbench.extensions.action.enableAll
workbench.extensions.action.enableAllWorkspace
workbench.extensions.action.checkForUpdates
workbench.extensions.action.enableAutoUpdate
workbench.extensions.action.disableAutoUpdate
workbench.extensions.action.install.specificVersion
workbench.action.showRuntimeExtensions
workbench.extensions.action.reinstall
extension.open
workbench.extensions.action.debugExtensionHost
workbench.extensions.action.extensionHostProfile
workbench.extensions.action.stopExtensionHostProfile
workbench.extensions.action.saveExtensionHostProfile
update.showCurrentReleaseNotes
workbench.action.reloadWindow
workbench.action.toggleDevTools
workbench.action.openRecent
workbench.action.reloadWindowWithExtensionsDisabled
workbench.action.logStorage
outline.focus
workbench.debug.action.focusVariablesView
workbench.debug.action.focusWatchView
workbench.debug.action.focusCallStackView
workbench.debug.action.focusBreakpointsView
workbench.debug.loadedScriptsView.focus
workbench.action.tasks.runTask
workbench.action.tasks.reRunTask
workbench.action.tasks.restartTask
workbench.action.tasks.terminate
workbench.action.tasks.showLog
workbench.action.tasks.build
workbench.action.tasks.test
workbench.action.tasks.configureTaskRunner
workbench.action.tasks.configureDefaultBuildTask
workbench.action.tasks.configureDefaultTestTask
workbench.action.tasks.showTasks
workbench.view.extension.test
workbench.files.action.focusOpenEditorsView
workbench.explorer.fileView.focus
extensions.listView.focus
extensions.enabledExtensionList.focus
extensions.disabledExtensionList.focus
extensions.popularExtensionsList.focus
extensions.builtInExtensionsList.focus
extensions.builtInBasicsExtensionsList.focus
extensions.builtInThemesExtensionsList.focus
extensions.recommendedList.focus
extensions.otherrecommendedList.focus
extensions.workspaceRecommendedList.focus
notifications.showList
notifications.hideList
notifications.toggleList
notification.clear
notification.expand
notification.collapse
notification.toggle
notifications.hideToasts
notifications.focusToasts
notifications.focusNextToast
notifications.focusPreviousToast
notifications.focusFirstToast
notifications.focusLastToast
notifications.clearAll
workbench.view.extension.references-view
references-view.tree.focus
npm.focus
workbench.action.openLogsFolder
workbench.action.setLogLevel
workbench.extensions.action.configureWorkspaceRecommendedExtensions
workbench.extensions.action.configureWorkspaceFolderRecommendedExtensions
workbench.extensions.action.addToWorkspaceRecommendations
workbench.extensions.action.addToWorkspaceFolderRecommendations
workbench.extensions.action.addToWorkspaceIgnoredRecommendations
workbench.extensions.action.addToWorkspaceFolderIgnoredRecommendations
material-icon-theme.activateIcons
material-icon-theme.toggleIconPacks
material-icon-theme.changeFolderTheme
material-icon-theme.changeFolderColor
material-icon-theme.restoreDefaultConfig
material-icon-theme.hidesExplorerArrows
material-icon-theme.opacity
extension.node-debug.toggleAutoAttach
editor.emmet.action.wrapWithAbbreviation
editor.emmet.action.wrapIndividualLinesWithAbbreviation
emmet.expandAbbreviation
editor.emmet.action.removeTag
editor.emmet.action.updateTag
editor.emmet.action.matchTag
editor.emmet.action.balanceOut
editor.emmet.action.balanceIn
editor.emmet.action.splitJoinTag
editor.emmet.action.mergeLines
editor.emmet.action.toggleComment
editor.emmet.action.nextEditPoint
editor.emmet.action.prevEditPoint
editor.emmet.action.selectNextItem
editor.emmet.action.selectPrevItem
editor.emmet.action.evaluateMathExpression
editor.emmet.action.incrementNumberByOneTenth
editor.emmet.action.incrementNumberByOne
editor.emmet.action.incrementNumberByTen
editor.emmet.action.decrementNumberByOneTenth
editor.emmet.action.decrementNumberByOne
editor.emmet.action.decrementNumberByTen
editor.emmet.action.updateImageSize
editor.emmet.action.reflectCSSValue
git.showOutput
merge-conflict.accept.current
merge-conflict.accept.incoming
merge-conflict.accept.selection
merge-conflict.accept.both
merge-conflict.accept.all-current
merge-conflict.accept.all-incoming
merge-conflict.accept.all-both
merge-conflict.next
merge-conflict.previous
merge-conflict.compare
extension.importFromSublime
extension.startServer
extension.stopServer
```

## Local devlopment

Read the [developer guide](README_DEV.md) for information on how to run this plugin locally and contribute changes.