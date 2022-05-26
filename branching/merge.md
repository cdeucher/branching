# default
    - develop->(rebase)->feature->(PR/Review/Merge)->develop
    - develop->(merge)->master
        - git merge --no-ff
        - git merge --ff-only (Just moves your branch pointer to point at the incoming commit)
        - git merge --squash

![Merge](img/merge.gif)
![Merge](img/merge2.gif)
![Merge](img/merge3.gif)
![Merge](img/merge4.gif)