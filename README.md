# Frontend
## Monorepo/Branching
![Monorepo](img/monorepo.jpeg "Monorepo")
 - [GitFlow](branching/gitflow.md)
 - GitHub Flow
 - GitLab Flow
 - Trunk-based development



## CI/CD
![Tools](img/devops.png "Tools")

## Deploy - S3/CLoudFront (Blue/Green)
![CF](img/s3_Cloudfront.png)

## Security Headers
![Headers](img/http-security-headers.png)

## WAF - OWASP 
![WAF OWASP](img/WAF_Owasp.png)

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
- [Setup - Monorepo](README_MONOREPO.md)
    - \*Branching
    - \*Atomic Commit
    - Tools
- [CircleCI - CodeQuality](.circleci/config.yml)
    - \*Manual Code Review
    - Automatic Code Review (Sonar)
      - Lint
      - Version Scan
      - SAST
    - DAST (ZAP) 

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
