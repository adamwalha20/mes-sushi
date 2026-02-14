---
description: Automatically version and push changes to GitHub
---

Whenever a major set of changes is completed or upon user request, follow these steps to ensure the repository is updated with a formal version:

1. **Bump Version**: Increment the version number in `package.json`.
   - Use semantic versioning (Major.Minor.Patch).
2. **Commit Changes**: Commit all changes with a descriptive message.
   - Command: `git add . && git commit -m "Your descriptive message"`
3. **Tag Version** (Optional but recommended):
   - Command: `git tag v[version_number]`
4. **Push to Remote**:
   - Command: `git push origin [branch_name] --tags`

// turbo
5. **Combined Execution**: Run the following sequence in the terminal:
```powershell
# Get the version from package.json (logic to be handled by the agent)
$version = "1.0.0" 
git add .
git commit -m "Release v$version"
git push origin main
```
