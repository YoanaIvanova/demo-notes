FROM adoptopenjdk/openjdk11:jdk-11.0.11_9-alpine-slim

WORKDIR "/app"

COPY /target/demo-notes-0.0.1-SNAPSHOT.jar demo-notes-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "/app/demo-notes-0.0.1-SNAPSHOT.jar"]