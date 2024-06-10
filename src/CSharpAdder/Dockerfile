ARG ARCH=amd64
ARG TAG=8.0-bookworm-slim-amd64

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["CSharpAdder.csproj", "./"]
RUN dotnet restore "CSharpAdder.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "CSharpAdder.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "CSharpAdder.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:$TAG AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 8080
EXPOSE 8081
ENTRYPOINT ["dotnet", "CSharpAdder.dll"]
