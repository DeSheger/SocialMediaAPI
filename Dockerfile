FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /app

COPY "twitter.sln" "twitter.sln"
COPY "API/API.csproj" "API/API.csproj"
COPY "Domain/Domain.csproj" "Domain/Domain.csproj"
COPY "Persistence/Persistence.csproj" "Persistence/Persistence.csproj"
COPY "Application/Application.csproj" "Application/Application.csproj"

RUN dotnet restore "twitter.sln"

# Copy everything else
COPY . .
WORKDIR /app
RUN dotnet publish -c Release -o out

# Build runtaime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT [ "dotnet", "API.dll" ]