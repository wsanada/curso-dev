const { exec } = require('node:child_process')

function checkPostgres() {
  exec('docker exec postgres-dev pg_isready --host localhost', (error, stdout, stderr) => {
    if (stdout.search('accepting connections') === -1) {
      process.stdout.write('.')

      checkPostgres()
      return
    }
    console.log('\n🟢 Postgres está aceitando conexões\n')
  })
}

process.stdout.write('\n\n🔴 Aguardando Postgres aceitar conexões')
checkPostgres()