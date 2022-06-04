![under-construction](img/under-construction.jpg)

---

- [Branching](#branching)
- [Requests](#requests)
- [Monorepo](#monorepo)
- [CI/CD](#cicd)

---

<a name="branching">![branching default](img/branching-default.jpg)</a>

 - [Version Numbers | Semantic Versioning](branching/semantic-numbers.md "version number")
 - [Conventional Commits](branching/conventional-commits.md)
 - [Git](branching/git.md)
 - Branching Flow
    - [Git Flow](branching/gitflow.md)
    - [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)
    - <r>GitLab Flow
    - [Trunk Based](branching/trunkbased.md)
        - [Feature Flag](flagsmith/readme.md)
    - [Release Flow](branching/releaseflow.md)
 - [Harnds-on](branching/hands-on.md)

---
 
<a name="requests">![branching default](img/http-security-headers.png)</a>
 
 - [Requests](requests/requests.md)
 - [Security Headers](requests/headers.md) 

 
## <a name="monorepo"></a>Monorepo
 - [Setup - Monorepo](README_MONOREPO.md)

---
## <a name="cicd"></a>CI/CD
![Tools](img/devops.png "Tools")
  - [CircleCI - CodeQuality](.circleci/config.yml)
  - \*Manual Code Review
  - Automatic Code Review (Sonar)
      - Lint
      - Version Scan
      - SAST
  - DAST (ZAP)

---
## Deploy - S3/CLoudFront (Blue/Green)
![CF](img/s3_Cloudfront.png)
 
## WAF - OWASP 
![WAF OWASP](img/WAF_Owasp.png)

---
## Observability
![Observability](img/observability.jpg "Observability")

---
# Backend

## ECS Cluster - Autoscalling
![ECS](img/ECS_Cluster.png)

## WAF - OWASP 
![WAF OWASP](img/WAF_Owasp.png)

## WAF - Anomaly detection
![WAF](img/WAF_anomaly_detection.png "WAF")

## Logging/Monitoring 
![Logging/Monitoring](img/monitoring.png)



---
- [Deploy - S3/CLoudFront (Blue/Green)](https://github.com/cdeucher/terraform-aws-monorepo/tree/master/terraform-aws-s3-cloudfront)
    - Security Headers
    - Geographic restrictions
- [WAF - OWASP](#)
- [WAF - Anomaly detection](README_WAF.md)
- [Logging/Monitoring ](#)
- [Observability](#)
    - Sentry
    - Bugsnag
    - Datadog

\*Topic to discuss.


### Links
- [Markdown](https://github.github.com/gfm/#container-blocks)
